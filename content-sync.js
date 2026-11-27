(() => {
    const clone = value => JSON.parse(JSON.stringify(value));
    const owns = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

    function equal(left, right) {
        if (left === right) return true;
        if (left === null || right === null || typeof left !== "object" || typeof right !== "object") return false;
        if (Array.isArray(left) !== Array.isArray(right)) return false;
        const leftKeys = Object.keys(left);
        const rightKeys = Object.keys(right);
        return leftKeys.length === rightKeys.length
            && leftKeys.every(key => owns(right, key) && equal(left[key], right[key]));
    }

    function mergeCollection(defaults = [], local = [], base = []) {
        const defaultById = new Map(defaults.map(item => [item.id, item]));
        const baseById = new Map(base.map(item => [item.id, item]));
        const localById = new Map(local.map(item => [item.id, item]));
        const merged = [];

        local.forEach(item => {
            const defaultItem = defaultById.get(item.id);
            const baseItem = baseById.get(item.id);
            if (!defaultItem && baseItem) {
                if (!equal(item, baseItem)) merged.push(clone(item));
                return;
            }
            merged.push(defaultItem
                ? mergeRecord(defaultItem, item, baseItem)
                : clone(item));
        });

        defaults.forEach(item => {
            if (!localById.has(item.id) && !baseById.has(item.id)) merged.push(clone(item));
        });
        return merged;
    }

    function mergeRecord(defaultRecord, localRecord, baseRecord) {
        const result = {};
        const keys = new Set([
            ...Object.keys(defaultRecord || {}),
            ...Object.keys(localRecord || {}),
            ...Object.keys(baseRecord || {})
        ]);

        keys.forEach(key => {
            if (key === "sections" || key === "items" || key === "attributes") return;
            const hasLocal = owns(localRecord || {}, key);
            const hasBase = owns(baseRecord || {}, key);
            const hasDefault = owns(defaultRecord || {}, key);

            if (hasBase) {
                if (!hasLocal) return;
                if (!equal(localRecord[key], baseRecord[key])) {
                    result[key] = mergeValue(
                        hasDefault ? defaultRecord[key] : undefined,
                        localRecord[key],
                        baseRecord[key]
                    );
                } else if (hasDefault) {
                    result[key] = clone(defaultRecord[key]);
                }
            } else if (hasLocal) {
                result[key] = hasDefault
                    ? mergeValue(defaultRecord[key], localRecord[key], undefined)
                    : clone(localRecord[key]);
            } else if (hasDefault) {
                result[key] = clone(defaultRecord[key]);
            }
        });

        if (defaultRecord?.sections || localRecord?.sections || baseRecord?.sections) {
            result.sections = mergeCollection(
                defaultRecord?.sections,
                localRecord?.sections,
                baseRecord?.sections
            );
        }
        if (defaultRecord?.items || localRecord?.items || baseRecord?.items) {
            result.items = mergeCollection(
                defaultRecord?.items,
                localRecord?.items,
                baseRecord?.items
            );
        }
        if (defaultRecord?.attributes || localRecord?.attributes || baseRecord?.attributes) {
            result.attributes = mergeCollection(
                defaultRecord?.attributes,
                localRecord?.attributes,
                baseRecord?.attributes
            );
        }
        return result;
    }

    function mergeValue(defaultValue, localValue, baseValue) {
        const isRecord = value => value !== null && typeof value === "object" && !Array.isArray(value);
        if (isRecord(defaultValue) && isRecord(localValue)) {
            return mergeRecord(defaultValue, localValue, isRecord(baseValue) ? baseValue : undefined);
        }
        return clone(localValue);
    }

    window.KARMA_CONTENT_SYNC = {
        merge: (defaults, local, base) => mergeRecord(defaults, local || {}, base || {})
    };
})();

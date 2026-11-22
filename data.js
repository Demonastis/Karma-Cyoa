/* Editable source content for Reincarnation Through Karma. */
window.KARMA_DATA = {
  "title": "Reincarnation Through Karma",
  "intro": "Your life has ended. Your karma is calculated, then converted into choices for your next life. Build a new life with the points you have earned; powers and abilities do not automatically carry over unless a rule or purchase says they do.",
  "rules": [
    "Upon death, you arrive here and are judged by the good outcomes your actions produced. Your karma can be spent on your next life, including perks, background, physique, and special abilities.",
    "Karma measures the good your actions accomplish, regardless of your private thoughts or intentions. Outcomes matter.",
    "You do not retain memories of previous lives unless you purchase a perk or physique that allows memory retention.",
    "Any remaining good karma is converted into providence: essentially, good luck.",
    "If you die as a baby, all spent points are returned so you can try again.",
    "Powers that do not fit the next world's rules are acclimatized into a variant compatible with that world's power system.",
    "The point costs and rewards in this builder are editable. The source text does not assign prices to every option."
  ],
  "sections": [
    {
      "id": "karma",
      "title": "Your Past: Karma Tier",
      "description": "Choose the tier that best represents the outcomes of your previous life. The source also allows manual point adjustments.",
      "mode": "single",
      "items": [
        {
          "id": "saint",
          "name": "Saint",
          "cost": -100,
          "description": "Virtue reached legendary scale: for example, curing cancer, preventing a great tragedy, or saving the world through peaceful means."
        },
        {
          "id": "paragon",
          "name": "Positively Good (Paragon)",
          "cost": -80,
          "description": "Purely selfless, empathetic, and incorruptible; consistently sacrifices personal gain for the greater good."
        },
        {
          "id": "heroic",
          "name": "Noble / Heroic",
          "cost": -60,
          "description": "Helps others even at personal detriment, while still capable of selfishness."
        },
        {
          "id": "kind",
          "name": "Virtuous / Kind-Hearted",
          "cost": -40,
          "description": "Goes out of their way to donate, help animals, volunteer at shelters, and help others."
        },
        {
          "id": "decent",
          "name": "Decent / Well-Meaning",
          "cost": -20,
          "description": "Kind to others, respects elders, and is generally a good person."
        },
        {
          "id": "neutral",
          "name": "True Neutral / Pragmatic",
          "cost": 0,
          "description": "Has done both good and bad."
        },
        {
          "id": "self-serving",
          "name": "Self-Serving / Opportunistic",
          "cost": 20,
          "description": "Prioritizes personal comfort, profit, or safety; bends rules and takes advantage of situations without being overtly cruel."
        },
        {
          "id": "corrupt",
          "name": "Morally Corrupt / Unscrupulous",
          "cost": 40,
          "description": "Manipulative, greedy, or callous; willingly exploits or harms others to gain power, wealth, or personal goals."
        },
        {
          "id": "villainous",
          "name": "Malicious / Villainous",
          "cost": 60,
          "description": "Driven by hatred, tyranny, or cruelty; actively seeks to dominate, destroy, or inflict suffering."
        },
        {
          "id": "sadistic",
          "name": "Depraved / Sadistic",
          "cost": 80,
          "description": "Takes pleasure in pain, chaos, and ruin; rejects empathy and commits atrocities without remorse."
        },
        {
          "id": "abomination",
          "name": "Absolute Evil (Abomination)",
          "cost": 100,
          "description": "Exists solely to cause maximum suffering, annihilation, or corruption."
        }
      ]
    },
    {
      "id": "wealth",
      "title": "Background: Family Wealth",
      "description": "Choose the economic circumstances of the family you are born into.",
      "mode": "single",
      "items": [
        {
          "id": "poverty",
          "name": "Destitute / Poverty",
          "cost": -40,
          "description": "Unable to consistently afford basic needs such as food, shelter, and healthcare."
        },
        {
          "id": "working-poor",
          "name": "Paycheck-to-Paycheck / Working Poor",
          "cost": -20,
          "description": "Basic needs are met, but a single emergency can cause a financial crisis."
        },
        {
          "id": "middle-class",
          "name": "Middle Class",
          "cost": 0,
          "description": "Comfortable standard of living, steady income, and manageable debt, but still reliant on a paycheck."
        },
        {
          "id": "affluent",
          "name": "Upper-Middle Class / Affluent",
          "cost": 20,
          "description": "High income, strong savings rate, and significant discretionary spending."
        },
        {
          "id": "wealthy",
          "name": "Rich / Wealthy",
          "cost": 40,
          "description": "Income from investments and assets matches or exceeds an active salary."
        },
        {
          "id": "dynastic",
          "name": "Generational / Dynastic Wealth (Apex)",
          "cost": 80,
          "description": "Self-sustaining capital across multiple lifetimes without requiring active labor."
        }
      ]
    },
    {
      "id": "family",
      "title": "Background: Family Life",
      "description": "Choose the emotional and relational environment of your family.",
      "mode": "single",
      "items": [
        {
          "id": "authoritative",
          "name": "Authoritative & Relational",
          "cost": 10,
          "description": "Clear boundaries, mutual respect, warmth, and open communication. Conflicts are addressed through listening rather than blame."
        },
        {
          "id": "communal",
          "name": "Communal & Interdependent",
          "cost": 5,
          "description": "Shared responsibilities, teamwork, mutual support, and encouragement of individual growth."
        },
        {
          "id": "transactional",
          "name": "Transactional",
          "cost": 0,
          "description": "Stable and polite relationships focused on practical logistics, duties, and surface-level updates rather than emotional vulnerability."
        },
        {
          "id": "image-conscious",
          "name": "Image-Conscious",
          "cost": -5,
          "description": "The family prioritizes appearances, status, and perfectionism. Members may feel pressure to hide flaws and suppress difficult emotions."
        },
        {
          "id": "competitive",
          "name": "Competitive",
          "cost": -10,
          "description": "Love, praise, and attention feel scarce. Members compete for approval, creating sibling rivalry and conditional affection."
        },
        {
          "id": "detached",
          "name": "Emotionally Detached / Uninvolved",
          "cost": -15,
          "description": "Family members coexist with little affection, empathy, or support; needs often go unacknowledged."
        },
        {
          "id": "abusive",
          "name": "Abusive, Chaotic & Authoritarian",
          "cost": -20,
          "description": "Fear, rigid control, unpredictability, or verbal and physical harm undermine safety and self-worth."
        }
      ]
    },
    {
      "id": "world-type",
      "title": "World: Type",
      "description": "Choose the broad kind of world you will enter.",
      "mode": "single",
      "items": [
        {
          "id": "normal",
          "name": "Normal World",
          "cost": 0,
          "description": "A world without extraordinary systems specified by this choice."
        },
        {
          "id": "magic",
          "name": "Magic World",
          "cost": -10,
          "description": "A world where magic is part of reality."
        },
        {
          "id": "xianxia",
          "name": "Xianxia World",
          "cost": -20,
          "description": "A cultivation-oriented world."
        },
        {
          "id": "wuxia",
          "name": "Wuxia World",
          "cost": -5,
          "description": "A martial-arts-focused world."
        },
        {
          "id": "game",
          "name": "Game World",
          "cost": -5,
          "description": "A world structured around game-like systems."
        },
        {
          "id": "super",
          "name": "Super World",
          "cost": -5,
          "description": "A world where superhuman abilities exist."
        },
        {
          "id": "mythos",
          "name": "Mythos World",
          "cost": -20,
          "description": "A world shaped by myths and mythic forces."
        }
      ]
    },
    {
      "id": "timeline",
      "title": "World: Timeline",
      "description": "Choose the era in which the next life begins.",
      "mode": "single",
      "items": [
        {
          "id": "prehistoric",
          "name": "Prehistoric & Mythic Era",
          "cost": -10,
          "description": "A Time when the Dinosaurs Roam the Earth, or Gods Roam the Earth"
        },
        {
          "id": "medieval",
          "name": "Medieval Era",
          "cost": -5,
          "description": "A Era of Kingdoms, Peasantry and so on"
        },
        {
          "id": "industrial",
          "name": "Industrial Era",
          "cost": 0,
          "description": "An era of Steam and Punk."
        },
        {
          "id": "modern",
          "name": "Modern Era",
          "cost": 0,
          "description": ""
        },
        {
          "id": "near-future",
          "name": "Near Future Era",
          "cost": -5,
          "description": ""
        },
        {
          "id": "far-future",
          "name": "Far Future Era",
          "cost": -5,
          "description": ""
        }
      ]
    },
    {
      "id": "genre",
      "title": "World: Genre / Danger Level",
      "description": "Choose the world's overall tone and danger level.",
      "mode": "single",
      "items": [
        {
          "id": "slice",
          "name": "Slice of Life",
          "cost": 0,
          "description": "Ranges from murder mystery to a happy, simple life."
        },
        {
          "id": "adventure",
          "name": "Adventure",
          "cost": -10,
          "description": "Not explicitly dangerous, but danger may arise if you seek it out or encounter it by accident."
        },
        {
          "id": "dangerous",
          "name": "Dangerous",
          "cost": -20,
          "description": "Threats range from distant world-ending dangers to attacks affecting ordinary people."
        },
        {
          "id": "dystopian",
          "name": "Dystopian",
          "cost": -30,
          "description": "The system is broken, making progress difficult for everyone."
        },
        {
          "id": "collapse",
          "name": "Collapse",
          "cost": -40,
          "description": "The world is already in serious danger, such as during an apocalypse."
        }
      ]
    },
    {
      "id": "good-physique",
      "title": "Physique: Special Body (Advantages)",
      "description": "Genetics can influence heritage and family connections. A genius may be born into a family of scholars; unusual strength may connect you to athletes or soldiers. Alternatively, these traits may re-emerge from distant ancestry. Multipliers below are copied from the source concept.",
      "mode": "multiple",
      "items": [
        {
          "id": "hyper-memory",
          "name": "Hyper Memory",
          "cost": 0,
          "description": "You don't forget."
        },
        {
          "id": "bodily-memory",
          "name": "Bodily Memory",
          "cost": 0,
          "description": "Your body retains muscle memory faster."
        },
        {
          "id": "genius",
          "name": "Genius",
          "cost": 0,
          "description": "3× modifier to Intelligence."
        },
        {
          "id": "barbarian",
          "name": "Barbarian",
          "cost": 0,
          "description": "2× Strength and Endurance; 1.5× Agility."
        },
        {
          "id": "titan",
          "name": "Titan",
          "cost": 0,
          "description": "2.5× Strength and Constitution, greatly raising the training cap; 0.8× Agility."
        },
        {
          "id": "swiftwind",
          "name": "Swiftwind",
          "cost": 0,
          "description": "2.5× Agility and 1.5× Endurance."
        },
        {
          "id": "hawk-eye",
          "name": "Hawk-Eye",
          "cost": 0,
          "description": "3× Perception; notice tiny details, distant targets, and subtle body language."
        },
        {
          "id": "iron-lung",
          "name": "Iron Lung",
          "cost": 0,
          "description": "3× Endurance; resist physical exhaustion far longer than normal."
        },
        {
          "id": "prodigy-vessel",
          "name": "Prodigy Vessel",
          "cost": 0,
          "description": "2× Constitution (doubling the stat allocation limit) and 1.5× all physical stats."
        },
        {
          "id": "hyper-cognition",
          "name": "Hyper-Cognition",
          "cost": 0,
          "description": "2× Intelligence and Perception; read people and situations quickly."
        },
        {
          "id": "apex-predator",
          "name": "Apex Predator",
          "cost": 0,
          "description": "1.8× Strength, Agility, and Perception."
        }
      ]
    },
    {
      "id": "bad-physique",
      "title": "Physique: Special Body (Disadvantages)",
      "description": "Choose disadvantages if desired. Negative costs are not assigned in the source, so these default to zero until edited.",
      "mode": "multiple",
      "items": [
        {
          "id": "blind",
          "name": "Blind",
          "cost": 0,
          "description": "Can't see."
        },
        {
          "id": "deaf",
          "name": "Deaf",
          "cost": 0,
          "description": "Can't hear."
        },
        {
          "id": "mute",
          "name": "Mute",
          "cost": 0,
          "description": "Can't speak."
        },
        {
          "id": "sickly",
          "name": "Sickly",
          "cost": 0,
          "description": "0.2× Constitution."
        },
        {
          "id": "frail",
          "name": "Frail",
          "cost": 0,
          "description": "0.4× Strength and Constitution."
        },
        {
          "id": "sluggish",
          "name": "Sluggish",
          "cost": 0,
          "description": "0.4× Agility; reactions and movement are very slow."
        },
        {
          "id": "asthmatic",
          "name": "Asthmatic",
          "cost": 0,
          "description": "0.3× Endurance; physical exertion causes rapid fatigue."
        },
        {
          "id": "dull-senses",
          "name": "Dull Senses",
          "cost": 0,
          "description": "0.3× Perception; traps, hidden enemies, and social cues are easy to miss."
        },
        {
          "id": "glass-cannon",
          "name": "Glass Cannon",
          "cost": 0,
          "description": "1.5× Strength and Agility, but 0.3× Constitution and a very low hard cap."
        },
        {
          "id": "scatterbrained",
          "name": "Scatterbrained",
          "cost": 0,
          "description": "0.4× Intelligence and 0.7× Perception."
        },
        {
          "id": "muscle-atrophy",
          "name": "Muscle Atrophy",
          "cost": 0,
          "description": "0.2× Strength; heavy lifting is nearly impossible."
        },
        {
          "id": "animal-race",
          "name": "Race Change to Animal",
          "cost": 0,
          "description": "Become a random animal based on your stat allocation and background. Example: high Strength and an uninvolved family may result in becoming a bear."
        },
        {
          "id": "insect-race",
          "name": "Race Change to Insect",
          "cost": 0,
          "description": "Become a random insect based on your stat allocation and background. Example: high Intelligence and an interdependent background may result in becoming an ant."
        }
      ]
    },
    {
      "id": "perks",
      "title": "Perks",
      "description": "Special rules or protections that carry into the next life when selected.",
      "mode": "multiple",
      "items": [
        {
          "id": "old-soul",
          "name": "Old Soul",
          "cost": 0,
          "description": "Your soul retains memories of your current life into the next, awakening randomly or during distressing events."
        },
        {
          "id": "self-made-destiny",
          "name": "Self-Made Destiny",
          "cost": 0,
          "description": "Abilities that predict the future are influenced by you, making their predictions faulty in ways that lead toward what you want them to see."
        },
        {
          "id": "strong-mind",
          "name": "Strong Mind",
          "cost": 0,
          "description": "Immunity to mind-reading abilities and stronger self-determination."
        },
        {
          "id": "boredom-immunity",
          "name": "Boredom Immunity",
          "cost": 0,
          "description": "You continue to enjoy activities and can do them for extended periods without becoming bored."
        },
        {
          "id": "plot-armor",
          "name": "Plot Armor",
          "cost": 0,
          "description": "Destiny involves you in the plot and assigns a role. Your performance affects the role; an archetype such as best friend grants corresponding plot protection."
        },
        {
          "id": "unique-snowflake",
          "name": "Unique Snowflake",
          "cost": 0,
          "description": "Powers that try to copy you or your abilities will always fail in some form."
        },
        {
          "id": "free-will",
          "name": "Free Will",
          "cost": 0,
          "description": "You can break free from your constraints and destiny cannot control you, but it cannot protect you either."
        }
      ]
    },
    {
      "id": "physical-powers",
      "title": "Powers: Physical",
      "description": "Physical abilities and body-focused effects.",
      "mode": "multiple",
      "items": [
        {
          "id": "kinetic-battery",
          "name": "Kinetic Battery",
          "cost": 0,
          "description": "Absorbs impact force from physical blows and stores it to boost your next strike or sprint."
        },
        {
          "id": "cellular-regeneration",
          "name": "Cellular Regeneration",
          "cost": 0,
          "description": "Rapidly heals cuts, broken bones, and toxins while enough calories are stored."
        },
        {
          "id": "combat-flow",
          "name": "Combat Flow",
          "cost": 0,
          "description": "Heightens reflexes and spatial awareness, helping your body dodge instinctively."
        },
        {
          "id": "environmental-constitution",
          "name": "Environmental Constitution",
          "cost": 0,
          "description": "Lets your body withstand extreme heat, freezing cold, low oxygen, and high pressure without discomfort."
        },
        {
          "id": "density-control",
          "name": "Density Control",
          "cost": 0,
          "description": "Temporarily increases body weight to anchor you, or reduces it to leap higher and fall safely."
        },
        {
          "id": "bio-electricity",
          "name": "Bio-Electricity",
          "cost": 0,
          "description": "Generates high-voltage charges through physical contact to stun targets or jump-start electronics."
        },
        {
          "id": "adrenaline-surge",
          "name": "Adrenaline Surge",
          "cost": 0,
          "description": "Manually controls adrenaline for short bursts beyond normal muscle limits without tearing ligaments."
        },
        {
          "id": "chameleon-skin",
          "name": "Chameleon Skin",
          "cost": 0,
          "description": "Changes skin pigmentation and texture to blend into immediate surroundings while standing still."
        }
      ]
    },
    {
      "id": "mental-powers",
      "title": "Powers: Mental",
      "description": "Cognitive, emotional, and psychic abilities.",
      "mode": "multiple",
      "items": [
        {
          "id": "parallel-processing",
          "name": "Parallel Processing",
          "cost": 0,
          "description": "Splits thought into independent streams for simultaneous analysis, planning, and action."
        },
        {
          "id": "mind-palace",
          "name": "Mind Palace",
          "cost": 0,
          "description": "Photographic memory, instant recall, and the ability to mentally simulate scenarios in slow motion."
        },
        {
          "id": "emotional-dampening",
          "name": "Emotional Dampening",
          "cost": 0,
          "description": "Maintains calm under extreme pressure and resists panic, fear auras, and mental manipulation."
        },
        {
          "id": "lie-detection",
          "name": "Lie Detection",
          "cost": 0,
          "description": "Reads subtle changes in tone, heartbeat, and micro-expressions to detect deception."
        },
        {
          "id": "psychometry",
          "name": "Psychometry",
          "cost": 0,
          "description": "Reads residual emotional impressions and brief surface memories from objects by touch."
        },
        {
          "id": "mental-firewall",
          "name": "Mental Firewall",
          "cost": 0,
          "description": "Creates a psychic barrier that shocks or damages anyone attempting to read, control, or invade your mind."
        },
        {
          "id": "dream-walking",
          "name": "Dream Walking",
          "cost": 0,
          "description": "Remain lucid while sleeping and enter nearby sleeping targets' dreams to communicate or gather information."
        },
        {
          "id": "sensory-tuning",
          "name": "Sensory Tuning",
          "cost": 0,
          "description": "Precisely controls the five senses: zoom vision, filter background noise, or block pain signals."
        }
      ]
    },
    {
      "id": "knowledge-powers",
      "title": "Powers: Knowledge",
      "description": "Learned expertise and information-processing abilities.",
      "mode": "multiple",
      "items": [
        {
          "id": "field-medicine",
          "name": "Field Medicine",
          "cost": 0,
          "description": "Mastery of anatomy, emergency surgery, herbalism, and battlefield trauma care."
        },
        {
          "id": "tactical-command",
          "name": "Tactical Command",
          "cost": 0,
          "description": "Deep understanding of military strategy, logistics, terrain advantages, and small-unit tactics."
        },
        {
          "id": "structural-engineering",
          "name": "Structural Engineering",
          "cost": 0,
          "description": "Identifies structural weak points in buildings, bridges, and armor, and methods to fortify or demolish them."
        },
        {
          "id": "polyglot",
          "name": "Polyglot",
          "cost": 0,
          "description": "Instant fluency in reading, writing, and speaking any mundane or ancient language encountered."
        },
        {
          "id": "alchemy-chemistry",
          "name": "Alchemy & Chemistry",
          "cost": 0,
          "description": "Knowledge of chemical reactions, toxicology, metallurgy, and making potions or explosives from raw ingredients."
        },
        {
          "id": "survivalism",
          "name": "Survivalism",
          "cost": 0,
          "description": "Mastery of wilderness navigation, tracking, foraging, shelter building, and identifying edible or poisonous plants."
        },
        {
          "id": "cryptography",
          "name": "Cryptography",
          "cost": 0,
          "description": "Spots patterns, cracks complex ciphers, bypasses digital security, and understands alien or forgotten writing systems."
        },
        {
          "id": "psychology-manipulation",
          "name": "Psychology & Manipulation",
          "cost": 0,
          "description": "Deep insight into behavior, body language, social engineering, persuasion, and negotiation."
        }
      ]
    },
    {
      "id": "magical-powers",
      "title": "Powers: Magical",
      "description": "Magic-oriented abilities; incompatible powers adapt to the world's system under the stated rule.",
      "mode": "multiple",
      "items": [
        {
          "id": "rune-weaving",
          "name": "Rune Weaving",
          "cost": 0,
          "description": "Carves or draws temporary symbols on objects to grant effects such as sharpness, lightness, or fire resistance."
        },
        {
          "id": "mana-sight",
          "name": "Mana Sight",
          "cost": 0,
          "description": "Sees magical energy, hidden enchantments, curses, and mana flowing through living beings."
        },
        {
          "id": "spatial-pocket",
          "name": "Spatial Pocket",
          "cost": 0,
          "description": "Creates a small personal extradimensional storage space."
        },
        {
          "id": "elemental-transmutation",
          "name": "Elemental Transmutation",
          "cost": 0,
          "description": "Converts raw mana into basic elements such as sparks, water, gusts of wind, or stone."
        },
        {
          "id": "shadow-step",
          "name": "Shadow Step",
          "cost": 0,
          "description": "Merges into a shadow and emerges from another connected or nearby shadow within line of sight."
        },
        {
          "id": "soul-bound-weapon",
          "name": "Soul-Bound Weapon",
          "cost": 0,
          "description": "Binds a mundane weapon to your spirit so it can be summoned and slowly repaired with mana."
        },
        {
          "id": "gravity-nudge",
          "name": "Gravity Nudge",
          "cost": 0,
          "description": "Alters local gravity on small objects or yourself for a few seconds, enabling wall-running or projectile deflection."
        },
        {
          "id": "ward-crafting",
          "name": "Ward Crafting",
          "cost": 0,
          "description": "Sets invisible perimeters that alert you when crossed, block weak spirits, or dampen sound."
        }
      ]
    },
    {
      "id": "other-powers",
      "title": "Powers: Other",
      "description": "Abilities that do not fit the other categories.",
      "mode": "multiple",
      "items": [
        {
          "id": "danger-sense",
          "name": "Danger Sense",
          "cost": 0,
          "description": "Triggers a sharp instinct when targeted, watched with hostile intent, or approaching a trap."
        },
        {
          "id": "luck-manipulation",
          "name": "Luck Manipulation",
          "cost": 0,
          "description": "Subtly tilts everyday probabilities in your favor."
        },
        {
          "id": "synergy-link",
          "name": "Synergy Link",
          "cost": 0,
          "description": "Physical, mental, and magical abilities passively strengthen one another as you train."
        },
        {
          "id": "skill-copy",
          "name": "Skill Copy",
          "cost": 0,
          "description": "Learns the basics of a mundane skill or fighting style after watching someone perform it for a few minutes."
        },
        {
          "id": "karma-ledger",
          "name": "Karma Ledger",
          "cost": 0,
          "description": "Tracks moral alignment and hostile intent, showing a subtle aura around people who mean you harm."
        },
        {
          "id": "save-state",
          "name": "Save State",
          "cost": 0,
          "description": "Places one mental anchor per day and rewinds you to it within ten seconds if you make a fatal mistake."
        },
        {
          "id": "item-appraisal",
          "name": "Item Appraisal",
          "cost": 0,
          "description": "Displays hidden properties, durability, history, and weaknesses of inspected weapons, artifacts, or machines."
        },
        {
          "id": "familiar-bond",
          "name": "Familiar Bond",
          "cost": 0,
          "description": "Forms a telepathic link with a normal animal or small magical creature, sharing senses and helping it grow stronger."
        }
      ]
    },
    {
      "id": "drawbacks",
      "title": "Drawbacks",
      "description": "Optional complications. The source does not define point rewards or costs for these entries.",
      "mode": "multiple",
      "items": [
        {
          "id": "honesty-compulsion",
          "name": "Honesty Compulsion",
          "cost": 0,
          "description": "You cannot tell a direct lie. You may omit details or phrase things cleverly, but false statements cause sharp headaches."
        },
        {
          "id": "sensory-overload",
          "name": "Sensory Overload",
          "cost": 0,
          "description": "Heightened senses cannot be turned down, making crowds, bright lights, and strong smells painful without protection."
        },
        {
          "id": "bounty-target",
          "name": "Bounty Target",
          "cost": 0,
          "description": "A powerful local guild, faction, or monster hunter starts with your description and actively tracks you."
        },
        {
          "id": "code-of-honor",
          "name": "Code of Honor",
          "cost": 0,
          "description": "You are bound by a strict personal code."
        },
        {
          "id": "technological-bane",
          "name": "Technological Bane",
          "cost": 0,
          "description": "Technology fails when you try to work with it."
        },
        {
          "id": "lazy",
          "name": "Lazy",
          "cost": 0,
          "description": "You feel persistently lazy."
        },
        {
          "id": "depressed",
          "name": "Depressed",
          "cost": 0,
          "description": "You experience a persistent feeling of sadness."
        }
      ]
    }
  ],
  "stats": {
    "starting": 30,
    "description": "Allocate your default 30 stat points. One karma point buys one stat point. The source describes an average stat as 5 and 10 as a super-genius level; above 10 is beyond genius.",
    "attributes": [

      {
        "id": "constitution",
        "name": "Constitution",
        "description": "The body's limit and training ceiling. The hard limit for allocated points is twice Constitution."
      },
      {
        "id": "strength",
        "name": "Strength",
        "description": "The ability to lift."
      },
      {
        "id": "endurance",
        "name": "Endurance",
        "description": "The ability to keep moving."
      },
      {
        "id": "agility",
        "name": "Agility",
        "description": "The ability to move quickly."
      },
      
      {
        "id": "perception",
        "name": "Perception",
        "description": "The body's senses: noticing social cues, seeing farther, smelling better, and more."
      },
      {
        "id": "intelligence",
        "name": "Intelligence",
        "description": "A stat referenced by the physique modifiers; no further definition is supplied in the source."
      }
    ]
  }
};

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
      "id": "patron-alignment",
      "title": "Patron: Alignment",
      "description": "Choose an alignment to learn what its patrons offer, then choose one patron whose story you want to live.",
      "mode": "single",
      "items": [
        {
          "id": "alignment-good",
          "name": "Good",
          "alignment": "good",
          "cost": 0,
          "description": "Good patrons double the karma you gained from your past. they expect the best of you."
        },
        {
          "id": "alignment-neutral",
          "name": "Neutral",
          "alignment": "neutral",
          "cost": 0,
          "description": "Neutral patrons leave your past karma unchanged and offer missions for extra points. They want to make a deal with you."
        },
        {
          "id": "alignment-evil",
          "name": "Bad / Evil",
          "alignment": "evil",
          "cost": 0,
          "description": "Evil patrons flip the karma effect of your past: good karma decreases your points, while evil karma increases them. They expect entertainment."
        },
      ]
    },
    {
      "id": "patron-choices",
      "title": "Patron: Choose a Patron",
      "description": "Choose the patron whose preferred story will shape your next life.",
      "mode": "single",
      "requiresAlignment": true,
      "items": [
        {
          "id": "patron-keeper-eternal-hearth",
          "name": "The Keeper of the Eternal Hearth",
          "alignment": "good",
          "cost": 0,
          "description": "Wants to see familial warmth. Protect what you call home, whatever form it takes."
        },
        {
          "id": "patron-arbiter-radiant-scale",
          "name": "The Arbiter of the Radiant Scale",
          "alignment": "good",
          "cost": 0,
          "description": "Wants to see righteous judgment. Fight for what is right, by your own measure."
        },
        {
          "id": "patron-hero-distant-horizon",
          "name": "The Hero of Distant Horizon",
          "alignment": "good",
          "cost": 0,
          "description": "Wants to see grand adventure. Witness the wonders of the world on his behalf."
        },
        {
          "id": "patron-mercy-gentle-hand",
          "name": "The Mercy of Gentle Hand",
          "alignment": "good",
          "cost": 0,
          "description": "Wants to see redemption and grace. Save someone important, from danger or from themselves."
        },
        {
          "id": "patron-herald-first-light",
          "name": "The Herald of the First Light",
          "alignment": "good",
          "cost": 0,
          "description": "Wants to see hope endure. Bring witness to the warmth that survives in the dark."
        },
        {
          "id": "patron-warden-balance",
          "name": "The Warden of Balance",
          "alignment": "neutral",
          "cost": 0,
          "description": "Wants to see equilibrium maintained. Tip the scales whenever one side grows too loud."
        },
        {
          "id": "patron-judge-karmic-ledger",
          "name": "The Judge of the Karmic Ledger",
          "alignment": "neutral",
          "cost": 0,
          "description": "Wants to see consequences collected. Hunt those who renege on their debts, literal or moral."
        },
        {
          "id": "patron-jester-whimsy-jeer",
          "name": "The Jester of the Whimsy Jeer",
          "alignment": "neutral",
          "cost": 0,
          "description": "Wants to see absurdist comedy. Bring chaotic joy and unravel the plans of the overly serious."
        },
        {
          "id": "patron-archivist-forgotten",
          "name": "The Archivist of the Forgotten",
          "alignment": "neutral",
          "cost": 0,
          "description": "Wants to see lost mysteries uncovered. Explore obscure places and ensure nothing truly dies unremembered."
        },
        {
          "id": "patron-pilgrim-endless-roads",
          "name": "The Pilgrim of Endless Roads",
          "alignment": "neutral",
          "cost": 0,
          "description": "Wants to see wandering drama. Search for someone or something elusive across the world."
        },
        {
          "id": "patron-phantom-sunken-crown",
          "name": "The Phantom of the Sunken Crown",
          "alignment": "neutral",
          "cost": 0,
          "description": "Wants to see an audacious heist. Claim what others believe is untouchable."
        },
        {
          "id": "patron-butcher-fourth-dimension",
          "name": "The Butcher of the 4th Dimension",
          "alignment": "evil",
          "cost": 0,
          "description": "Wants to see visceral carnage. Carve a bloody legend and eliminate a worthy hero."
        },
        {
          "id": "patron-betrayer-never-sate",
          "name": "The Betrayer of the Never Sate",
          "alignment": "evil",
          "cost": 0,
          "description": "Wants to see creeping corruption. Spread his cult and twist devotion into obsession."
        },
        {
          "id": "patron-usurper-light",
          "name": "The Usurper of the Light",
          "alignment": "evil",
          "cost": 0,
          "description": "Wants to see the fall of the pure. Shatter idols and destroy those who lean toward the light."
        },
        {
          "id": "patron-agony-envy",
          "name": "The Agony of Envy",
          "alignment": "evil",
          "cost": 0,
          "description": "Wants to see bitter tragedy. Break the happiness of the fortunate and turn joy into ruin."
        }
      ]
    },
    {
      "id": "patron-loan",
      "title": "Patron: Loan",
      "description": "A loan is your patron's investment in the story they want to see. Taking one lets them nudge your fate toward their preferred genre; the larger the loan, the stronger the narrative pull. Choose one amount.",
      "mode": "single",
      "requiresPatron": true,
      "items": [
        {
          "id": "patron-loan-10",
          "name": "Small Investment",
          "cost": -10,
          "description": "10 points. A small coincidence may put a fitting opportunity in your path."
        },
        {
          "id": "patron-loan-20",
          "name": "Modest Investment",
          "cost": -20,
          "description": "20 points. Your patron's preferred themes begin to shape meaningful encounters."
        },
        {
          "id": "patron-loan-40",
          "name": "Substantial Investment",
          "cost": -40,
          "description": "40 points. Your fate is noticeably steered toward the life your patron wants to witness."
        },
        {
          "id": "patron-loan-80",
          "name": "Major Investment",
          "cost": -80,
          "description": "80 points. Your patron can strongly nudge your life toward their chosen genre."
        },
        {
          "id": "patron-loan-100",
          "name": "Grand Investment",
          "cost": -100,
          "description": "100 points. Your patron's preferred story becomes a defining force in your life."
        }
      ]
    },
    {
      "id": "patron-missions",
      "title": "Patron: Missions",
      "description": "Neutral patrons offer missions that reward you for advancing the story they want to see. You may select any missions offered by your chosen Neutral patron.",
      "mode": "multiple",
      "requiresAlignment": "neutral",
      "items": [
        {
          "id": "mission-warden-tip-the-scale",
          "requiresPatron": "patron-warden-balance",
          "name": "Tip the Scale",
          "cost": -10,
          "description": "Find an unfair struggle where the weak are being crushed by the strong, and secretly give the underdog just enough of an edge to make it a fair fight."
        },
        {
          "id": "mission-warden-razors-edge",
          "requiresPatron": "patron-warden-balance",
          "name": "The Razor's Edge",
          "cost": -10,
          "description": "Step between two bitter rivals locked in a cycle of escalation and manipulate events so neither can ever completely destroy the other."
        },
        {
          "id": "mission-warden-topple-giant",
          "requiresPatron": "patron-warden-balance",
          "name": "Topple the Giant",
          "cost": -20,
          "description": "Rise within your world's dominant, unchecked power and pull the thread that brings its arrogance crashing down."
        },
        {
          "id": "mission-warden-forced-harmony",
          "requiresPatron": "patron-warden-balance",
          "name": "Forced Harmony",
          "cost": -20,
          "description": "Trap two mortal enemies in a crisis where neither can survive unless they learn to rely on each other."
        },
        {
          "id": "mission-warden-eternal-equilibrium",
          "requiresPatron": "patron-warden-balance",
          "name": "Eternal Equilibrium",
          "cost": -40,
          "description": "Fundamentally alter the ruling order of your world so no single force, faction, or ideology can ever achieve absolute dominance again."
        },
        {
          "id": "mission-judge-collect-what-is-owed",
          "requiresPatron": "patron-judge-karmic-ledger",
          "name": "Collect What Is Owed",
          "cost": -10,
          "description": "Track down someone who cheated another out of something precious, and corner them until they willingly return what they stole."
        },
        {
          "id": "mission-judge-mirror-of-irony",
          "requiresPatron": "patron-judge-karmic-ledger",
          "name": "The Mirror of Irony",
          "cost": -10,
          "description": "Engineer a twist of fate where a cruel or hypocritical figure suffers the exact misfortune they inflicted on others."
        },
        {
          "id": "mission-judge-long-reckoning",
          "requiresPatron": "patron-judge-karmic-ledger",
          "name": "The Long Reckoning",
          "cost": -20,
          "description": "Spend years weaving a quiet web around an untouchable wrongdoer, dismantling their life piece by piece before revealing why."
        },
        {
          "id": "mission-judge-no-escape",
          "requiresPatron": "patron-judge-karmic-ledger",
          "name": "No Escape from the Past",
          "cost": -20,
          "description": "Hunt down a legendary figure or monster who abandoned their sins to live in peace, and bring their unfinished debts to their doorstep."
        },
        {
          "id": "mission-judge-judgment-of-world",
          "requiresPatron": "patron-judge-karmic-ledger",
          "name": "Judgment of the World",
          "cost": -40,
          "description": "Expose the buried crimes of your world's highest authority before everyone they rule, forcing a historic reckoning."
        },
        {
          "id": "mission-jester-ruin-the-moment",
          "requiresPatron": "patron-jester-whimsy-jeer",
          "name": "Ruin the Moment",
          "cost": -10,
          "description": "Hijack a deadly serious, high-stakes gathering and derail it into such an absurd comedy of errors that everyone forgets why they cared."
        },
        {
          "id": "mission-jester-phantom-threat",
          "requiresPatron": "patron-jester-whimsy-jeer",
          "name": "The Phantom Threat",
          "cost": -10,
          "description": "Convince a notoriously rigid, humorless authority that a completely fabricated, ridiculous omen or rule is of utmost importance, and watch them dance to it."
        },
        {
          "id": "mission-jester-grand-bluff",
          "requiresPatron": "patron-jester-whimsy-jeer",
          "name": "The Grand Bluff",
          "cost": -20,
          "description": "Blag your way into a position of immense prestige or expertise you are wholly unqualified for, surviving on theatrical confidence and sheer luck."
        },
        {
          "id": "mission-jester-accidental-legend",
          "requiresPatron": "patron-jester-whimsy-jeer",
          "name": "The Accidental Legend",
          "cost": -20,
          "description": "Start a nonsensical rumor, trend, or belief as a private joke, only for it to spiral into a massive movement."
        },
        {
          "id": "mission-jester-ultimate-punchline",
          "requiresPatron": "patron-jester-whimsy-jeer",
          "name": "The Ultimate Punchline",
          "cost": -40,
          "description": "Resolve your world's greatest crisis, war, or existential threat in the most anticlimactic, absurd way imaginable, turning epic tragedy into a timeless joke."
        },
        {
          "id": "mission-archivist-unfinished-words",
          "requiresPatron": "patron-archivist-forgotten",
          "name": "Unfinished Words",
          "cost": -10,
          "description": "Discover the last trace of someone forgotten—a lost message, dying wish, or fading memory—and see their final intent through to the end."
        },
        {
          "id": "mission-archivist-off-the-chart",
          "requiresPatron": "patron-archivist-forgotten",
          "name": "Off the Chart",
          "cost": -10,
          "description": "Venture into a place the world has abandoned or erased from memory, and record the truth of what still lingers there."
        },
        {
          "id": "mission-archivist-dying-flame",
          "requiresPatron": "patron-archivist-forgotten",
          "name": "The Dying Flame",
          "cost": -20,
          "description": "Find the last living keeper of a vanishing art, lost truth, or forbidden knowledge, earn their trust, and ensure it survives into the next age."
        },
        {
          "id": "mission-archivist-rewrite-the-lie",
          "requiresPatron": "patron-archivist-forgotten",
          "name": "Rewrite the Lie",
          "cost": -20,
          "description": "Uncover the buried truth behind a celebrated victory or beloved hero, prove history remembered the wrong side, and bring the truth to light."
        },
        {
          "id": "mission-archivist-origin-secret",
          "requiresPatron": "patron-archivist-forgotten",
          "name": "The Origin Secret",
          "cost": -40,
          "description": "Uncover the foundational, intentionally erased mystery of your world's creation or history, and force everyone to confront what was hidden."
        },
        {
          "id": "mission-pilgrim-long-delivery",
          "requiresPatron": "patron-pilgrim-endless-roads",
          "name": "The Long Delivery",
          "cost": -10,
          "description": "Carry a meaningful keepsake or message across unfamiliar lands to someone whose name is the only clue you possess."
        },
        {
          "id": "mission-pilgrim-passing-through",
          "requiresPatron": "patron-pilgrim-endless-roads",
          "name": "Passing Through",
          "cost": -10,
          "description": "Leave behind everything familiar and drift from place to place, leaving a brief, unforgettable mark on dozens of lives before vanishing again."
        },
        {
          "id": "mission-pilgrim-chasing-shadow",
          "requiresPatron": "patron-pilgrim-endless-roads",
          "name": "Chasing a Shadow",
          "cost": -20,
          "description": "Spend years following rumors and fleeting encounters to track down an elusive wanderer, lost bond, or mythical figure always one step ahead."
        },
        {
          "id": "mission-pilgrim-crossroads",
          "requiresPatron": "patron-pilgrim-endless-roads",
          "name": "The Crossroads",
          "cost": -20,
          "description": "Establish a neutral haven at the edge of nowhere where outcasts, travelers, and enemies must lay down their conflict and share their stories."
        },
        {
          "id": "mission-pilgrim-beyond-edge",
          "requiresPatron": "patron-pilgrim-endless-roads",
          "name": "Beyond the Edge",
          "cost": -40,
          "description": "Cross the impassable boundary separating the known from the unknown, and become the first to stand on the other side."
        },
        {
          "id": "mission-phantom-calling-card",
          "requiresPatron": "patron-phantom-sunken-crown",
          "name": "The Calling Card",
          "cost": -10,
          "description": "Slip past the defenses of someone who believes themselves untouchable, take their most prized possession, and leave proof you were there."
        },
        {
          "id": "mission-phantom-reverse-theft",
          "requiresPatron": "patron-phantom-sunken-crown",
          "name": "The Reverse Theft",
          "cost": -10,
          "description": "Infiltrate the most fiercely guarded place you can find—not to take anything out, but to leave something behind that changes everything when discovered."
        },
        {
          "id": "mission-phantom-stolen-skin",
          "requiresPatron": "patron-phantom-sunken-crown",
          "name": "Stolen Skin",
          "cost": -20,
          "description": "Claim someone else's entire identity, living their life and fooling those closest to them for years without anyone realizing the truth."
        },
        {
          "id": "mission-phantom-clockwork-job",
          "requiresPatron": "patron-phantom-sunken-crown",
          "name": "The Clockwork Job",
          "cost": -20,
          "description": "Gather specialists for an impossible infiltration against an impenetrable target, improvising your way out when the plan goes sideways."
        },
        {
          "id": "mission-phantom-steal-impossible",
          "requiresPatron": "patron-phantom-sunken-crown",
          "name": "Steal the Impossible",
          "cost": -40,
          "description": "Claim something your world believes cannot be stolen—an abstract right, cosmic power, collective memory, or supreme symbol of authority."
        }
      ]
    },
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
          "cost": 10,
          "description": "You don't forget."
        },
        {
          "id": "bodily-memory",
          "name": "Bodily Memory",
          "cost": 10,
          "description": "Your body retains muscle memory faster."
        },
        {
          "id": "genius",
          "name": "Genius",
          "cost": 20,
          "modifiers": {
            "intelligence": 3
          },
          "description": "3× modifier to Intelligence."
        },
        {
          "id": "barbarian",
          "name": "Barbarian",
          "cost": 30,
          "modifiers": {
            "strength": 2,
            "endurance": 2,
            "agility": 1.5
          },
          "description": "2× Strength and Endurance; 1.5× Agility."
        },
        {
          "id": "titan",
          "name": "Titan",
          "cost": 30,
          "modifiers": {
            "strength": 2.5,
            "constitution": 2.5,
            "agility": 0.8
          },
          "description": "2.5× Strength and Constitution, greatly raising the training cap; 0.8× Agility."
        },
        {
          "id": "swiftwind",
          "name": "Swiftwind",
          "cost": 20,
          "modifiers": {
            "agility": 2.5,
            "endurance": 1.5
          },
          "description": "2.5× Agility and 1.5× Endurance."
        },
        {
          "id": "hawk-eye",
          "name": "Hawk-Eye",
          "cost": 30,
          "modifiers": {
            "perception": 3
          },
          "description": "3× Perception; notice tiny details, distant targets, and subtle body language."
        },
        {
          "id": "iron-lung",
          "name": "Iron Lung",
          "cost": 30,
          "modifiers": {
            "endurance": 3
          },
          "description": "3× Endurance; resist physical exhaustion far longer than normal."
        },
        {
          "id": "prodigy-vessel",
          "name": "Prodigy Vessel",
          "cost": 50,
          "modifiers": {
            "constitution": 2,
            "strength": 1.5,
            "endurance": 1.5,
            "agility": 1.5
          },
          "description": "2× Constitution (doubling the stat allocation limit) and 1.5× all physical stats."
        },
        {
          "id": "hyper-cognition",
          "name": "Hyper-Cognition",
          "cost": 40,
          "modifiers": {
            "intelligence": 2,
            "perception": 2
          },
          "description": "2× Intelligence and Perception; read people and situations quickly."
        },
        {
          "id": "apex-predator",
          "name": "Apex Predator",
          "cost": 30,
          "modifiers": {
            "strength": 1.8,
            "agility": 1.8,
            "perception": 1.8
          },
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
          "cost": -10,
          "description": "Can't see."
        },
        {
          "id": "deaf",
          "name": "Deaf",
          "cost": -10,
          "description": "Can't hear."
        },
        {
          "id": "mute",
          "name": "Mute",
          "cost": -10,
          "description": "Can't speak."
        },
        {
          "id": "sickly",
          "name": "Sickly",
          "cost": -40,
          "modifiers": {
            "constitution": 0.2
          },
          "description": "0.2× Constitution."
        },
        {
          "id": "frail",
          "name": "Frail",
          "cost": -50,
          "modifiers": {
            "strength": 0.4,
            "constitution": 0.4
          },
          "description": "0.4× Strength and Constitution."
        },
        {
          "id": "sluggish",
          "name": "Sluggish",
          "cost": -30,
          "modifiers": {
            "agility": 0.4
          },
          "description": "0.4× Agility; reactions and movement are very slow."
        },
        {
          "id": "asthmatic",
          "name": "Asthmatic",
          "cost": -20,
          "modifiers": {
            "endurance": 0.3
          },
          "description": "0.3× Endurance; physical exertion causes rapid fatigue."
        },
        {
          "id": "dull-senses",
          "name": "Dull Senses",
          "cost": -20,
          "modifiers": {
            "perception": 0.3
          },
          "description": "0.3× Perception; traps, hidden enemies, and social cues are easy to miss."
        },
        {
          "id": "glass-cannon",
          "name": "Glass Cannon",
          "cost": -10,
          "modifiers": {
            "strength": 1.5,
            "agility": 1.5,
            "constitution": 0.3
          },
          "description": "1.5× Strength and Agility, but 0.3× Constitution and a very low hard cap."
        },
        {
          "id": "scatterbrained",
          "name": "Scatterbrained",
          "cost": -20,
          "modifiers": {
            "intelligence": 0.4,
            "perception": 0.7
          },
          "description": "0.4× Intelligence and 0.7× Perception."
        },
        {
          "id": "muscle-atrophy",
          "name": "Muscle Atrophy",
          "cost": -50,
          "modifiers": {
            "strength": 0.2
          },
          "description": "0.2× Strength; heavy lifting is nearly impossible."
        },
        {
          "id": "animal-race",
          "name": "Race Change to Animal",
          "cost": -20,
          "description": "Become a random animal based on your stat allocation and background. Example: high Strength and an uninvolved family may result in becoming a bear."
        },
        {
          "id": "insect-race",
          "name": "Race Change to Insect",
          "cost": -40,
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
          "cost": 30,
          "description": "Your soul retains memories of your current life into the next, awakening randomly or during distressing events."
        },
        {
          "id": "self-made-destiny",
          "name": "Self-Made Destiny",
          "cost": 20,
          "description": "Abilities that predict the future are influenced by you, making their predictions faulty in ways that lead toward what you want them to see."
        },
        {
          "id": "strong-mind",
          "name": "Strong Mind",
          "cost": 20,
          "description": "Immunity to mind-reading abilities and stronger self-determination."
        },
        {
          "id": "boredom-immunity",
          "name": "Boredom Immunity",
          "cost": 10,
          "description": "You continue to enjoy activities and can do them for extended periods without becoming bored."
        },
        {
          "id": "plot-armor",
          "name": "Plot Armor",
          "cost": 20,
          "description": "Destiny involves you in the plot and assigns a role. Your performance affects the role; an archetype such as best friend grants corresponding plot protection."
        },
        {
          "id": "unique-snowflake",
          "name": "Unique Snowflake",
          "cost": 20,
          "description": "Powers that try to copy you or your abilities will always fail in some form."
        },
        {
          "id": "free-will",
          "name": "Free Will",
          "cost": 40,
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
          "cost": 20,
          "description": "Absorbs impact force from physical blows and stores it to boost your next strike or sprint."
        },
        {
          "id": "cellular-regeneration",
          "name": "Cellular Regeneration",
          "cost": 30,
          "description": "Rapidly heals cuts, broken bones, and toxins while enough calories are stored."
        },
        {
          "id": "combat-flow",
          "name": "Combat Flow",
          "cost": 20,
          "description": "Heightens reflexes and spatial awareness, helping your body dodge instinctively."
        },
        {
          "id": "environmental-constitution",
          "name": "Environmental Constitution",
          "cost": 10,
          "description": "Lets your body withstand extreme heat, freezing cold, low oxygen, and high pressure without discomfort."
        },
        {
          "id": "density-control",
          "name": "Density Control",
          "cost": 20,
          "description": "Temporarily increases body weight to anchor you, or reduces it to leap higher and fall safely."
        },
        {
          "id": "bio-electricity",
          "name": "Bio-Electricity",
          "cost": 20,
          "description": "Generates high-voltage charges through physical contact to stun targets or jump-start electronics."
        },
        {
          "id": "adrenaline-surge",
          "name": "Adrenaline Surge",
          "cost": 15,
          "description": "Manually controls adrenaline for short bursts beyond normal muscle limits without tearing ligaments."
        },
        {
          "id": "chameleon-skin",
          "name": "Chameleon Skin",
          "cost": 10,
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
          "cost": 20,
          "description": "Splits thought into independent streams for simultaneous analysis, planning, and action."
        },
        {
          "id": "mind-palace",
          "name": "Mind Palace",
          "cost": 20,
          "description": "Photographic memory, instant recall, and the ability to mentally simulate scenarios in slow motion."
        },
        {
          "id": "emotional-dampening",
          "name": "Emotional Dampening",
          "cost": 10,
          "description": "Maintains calm under extreme pressure and resists panic, fear auras, and mental manipulation."
        },
        {
          "id": "lie-detection",
          "name": "Lie Detection",
          "cost": 10,
          "description": "Reads subtle changes in tone, heartbeat, and micro-expressions to detect deception."
        },
        {
          "id": "psychometry",
          "name": "Psychometry",
          "cost": 15,
          "description": "Reads residual emotional impressions and brief surface memories from objects by touch."
        },
        {
          "id": "mental-firewall",
          "name": "Mental Firewall",
          "cost": 15,
          "description": "Creates a psychic barrier that shocks or damages anyone attempting to read, control, or invade your mind."
        },
        {
          "id": "dream-walking",
          "name": "Dream Walking",
          "cost": 20,
          "description": "Remain lucid while sleeping and enter nearby sleeping targets' dreams to communicate or gather information."
        },
        {
          "id": "sensory-tuning",
          "name": "Sensory Tuning",
          "cost": 10,
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
          "cost": 20,
          "description": "Mastery of anatomy, emergency surgery, herbalism, and battlefield trauma care."
        },
        {
          "id": "tactical-command",
          "name": "Tactical Command",
          "cost": 20,
          "description": "Deep understanding of military strategy, logistics, terrain advantages, and small-unit tactics."
        },
        {
          "id": "structural-engineering",
          "name": "Structural Engineering",
          "cost": 20,
          "description": "Identifies structural weak points in buildings, bridges, and armor, and methods to fortify or demolish them."
        },
        {
          "id": "polyglot",
          "name": "Polyglot",
          "cost": 10,
          "description": "Instant fluency in reading, writing, and speaking any mundane or ancient language encountered."
        },
        {
          "id": "alchemy-chemistry",
          "name": "Alchemy & Chemistry",
          "cost": 20,
          "description": "Knowledge of chemical reactions, toxicology, metallurgy, and making potions or explosives from raw ingredients."
        },
        {
          "id": "survivalism",
          "name": "Survivalism",
          "cost": 15,
          "description": "Mastery of wilderness navigation, tracking, foraging, shelter building, and identifying edible or poisonous plants."
        },
        {
          "id": "cryptography",
          "name": "Cryptography",
          "cost": 20,
          "description": "Spots patterns, cracks complex ciphers, bypasses digital security, and understands alien or forgotten writing systems."
        },
        {
          "id": "psychology-manipulation",
          "name": "Psychology & Manipulation",
          "cost": 30,
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
          "cost": 20,
          "description": "Carves or draws temporary symbols on objects to grant effects such as sharpness, lightness, or fire resistance."
        },
        {
          "id": "mana-sight",
          "name": "Mana Sight",
          "cost": 10,
          "description": "Sees magical energy, hidden enchantments, curses, and mana flowing through living beings."
        },
        {
          "id": "spatial-pocket",
          "name": "Spatial Pocket",
          "cost": 20,
          "description": "Creates a small personal extradimensional storage space."
        },
        {
          "id": "elemental-transmutation",
          "name": "Elemental Transmutation",
          "cost": 20,
          "description": "Converts raw mana into basic elements such as sparks, water, gusts of wind, or stone."
        },
        {
          "id": "shadow-step",
          "name": "Shadow Step",
          "cost": 20,
          "description": "Merges into a shadow and emerges from another connected or nearby shadow within line of sight."
        },
        {
          "id": "soul-bound-weapon",
          "name": "Soul-Bound Weapon",
          "cost": 15,
          "description": "Binds a mundane weapon to your spirit so it can be summoned and slowly repaired with mana."
        },
        {
          "id": "gravity-nudge",
          "name": "Gravity Nudge",
          "cost": 15,
          "description": "Alters local gravity on small objects or yourself for a few seconds, enabling wall-running or projectile deflection."
        },
        {
          "id": "ward-crafting",
          "name": "Ward Crafting",
          "cost": 20,
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
          "cost": 20,
          "description": "Triggers a sharp instinct when targeted, watched with hostile intent, or approaching a trap."
        },
        {
          "id": "luck-manipulation",
          "name": "Luck Manipulation",
          "cost": 30,
          "description": "Subtly tilts everyday probabilities in your favor."
        },
        {
          "id": "synergy-link",
          "name": "Synergy Link",
          "cost": 20,
          "description": "Physical, mental, and magical abilities passively strengthen one another as you train."
        },
        {
          "id": "skill-copy",
          "name": "Skill Copy",
          "cost": 25,
          "description": "Learns the basics of a mundane skill or fighting style after watching someone perform it for a few minutes."
        },
        {
          "id": "karma-ledger",
          "name": "Karma Ledger",
          "cost": 20,
          "description": "Tracks moral alignment and hostile intent, showing a subtle aura around people who mean you harm."
        },
        {
          "id": "save-state",
          "name": "Save State",
          "cost": 30,
          "description": "Places one mental anchor per day and rewinds you to it if you make a fatal mistake."
        },
        {
          "id": "item-appraisal",
          "name": "Item Appraisal",
          "cost": 10,
          "description": "Displays hidden properties, durability, history, and weaknesses of inspected weapons, artifacts, or machines."
        },
        {
          "id": "familiar-bond",
          "name": "Familiar Bond",
          "cost": 15,
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
          "cost": -10,
          "description": "You cannot tell a direct lie. You may omit details or phrase things cleverly, but false statements cause sharp headaches."
        },
        {
          "id": "sensory-overload",
          "name": "Sensory Overload",
          "cost": -10,
          "description": "Heightened senses cannot be turned down, making crowds, bright lights, and strong smells painful without protection."
        },
        {
          "id": "bounty-target",
          "name": "Bounty Target",
          "cost": -20,
          "description": "A powerful local guild, faction, or monster hunter starts with your description and actively tracks you."
        },
        {
          "id": "code-of-honor",
          "name": "Code of Honor",
          "cost": -20,
          "description": "You are bound by a strict personal code."
        },
        {
          "id": "technological-bane",
          "name": "Technological Bane",
          "cost": -20,
          "description": "Technology fails when you try to work with it."
        },
        {
          "id": "lazy",
          "name": "Lazy",
          "cost": -10,
          "description": "You feel persistently lazy."
        },
        {
          "id": "depressed",
          "name": "Depressed",
          "cost": -20,
          "description": "You experience a persistent feeling of sadness."
        }
      ]
    }
  ],
  "stats": {
    "starting": 30,
    "description": "Allocate points, your default starts at 30 stat points. One karma point buys one stat point. average stat is 5 and 10 is a super-genius level, above 10 is beyond genius. these Attributes represents your potential and what you can achieve by doing nothing special but doing something special like training allows you to reach it faster.",
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

const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    key: "A", label: "A", title: "Look and circle the correct words.",
    note: "Choose the word that matches each picture.", points: 3,
    questions: [
      choice("A1", "1.", ["unhappy", "nervous"], "unhappy", "Her face looks sad, so unhappy is the correct word.", A + "page1-img2-349x249.png"),
      choice("A2", "2.", ["cry", "proud"], "proud", "He is pleased with his A+ result, so he feels proud.", A + "page1-img3-349x249.png"),
      choice("A3", "3.", ["excited", "low"], "excited", "She is smiling and holding a balloon, so she is excited.", A + "page1-img4-349x249.png")
    ]
  },
  {
    key: "B", label: "B", title: "Circle the correct words.",
    note: "Choose the word with the matching meaning.", points: 4,
    questions: [
      choice("B1", "1. To close:", ["cry", "shut"], "shut", "Shut means to close something."),
      choice("B2", "2. To hit:", ["strike", "smile"], "strike", "Strike means to hit something."),
      choice("B3", "3. Sleepy:", ["right", "tired"], "tired", "A sleepy person feels tired."),
      choice("B4", "4. Loud:", ["wrong", "noisy"], "noisy", "Noisy describes something that makes a lot of sound.")
    ]
  },
  {
    key: "C", label: "C", title: "Complete the words. Then match.",
    note: "The letters a, b, and c are the original picture labels. Complete each word, then choose its picture.", points: 6,
    sectionImage: A + "section-c-pictures.png",
    questions: [
      { id: "C1", type: "paired", points: 2, prompt: "1. _ _ i _ e", parts: [
        { key: "word", label: "Complete the word", type: "input", answers: ["smile"], explanation: "The completed word is smile." },
        { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Picture c shows a boy smiling." }
      ]},
      { id: "C2", type: "paired", points: 2, prompt: "2. _ _ y", parts: [
        { key: "word", label: "Complete the word", type: "input", answers: ["cry"], explanation: "The completed word is cry." },
        { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Picture a shows a boy crying." }
      ]},
      { id: "C3", type: "paired", points: 2, prompt: "3. _ a _ n", parts: [
        { key: "word", label: "Complete the word", type: "input", answers: ["yawn"], explanation: "The completed word is yawn." },
        { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Picture b shows a girl yawning." }
      ]}
    ]
  },
  {
    key: "D", label: "D", title: "Complete the sentences.",
    note: "Choose the correct time preposition or phrase.", points: 4,
    questions: [
      choice("D1", "1. He starts school ___ Monday.", ["on", "in the"], "on", "Use on with days of the week: on Monday."),
      choice("D2", "2. She listens to music ___ morning.", ["in the", "at"], "in the", "Use in the with parts of the day: in the morning."),
      choice("D3", "3. Does he practice the piano ___ night?", ["at", "in the"], "at", "The fixed phrase is at night."),
      choice("D4", "4. They eat lunch ___ 1:00.", ["at", "on"], "at", "Use at with an exact clock time: at 1:00.")
    ]
  },
  {
    key: "E", label: "E", title: "Look and complete the answers.",
    note: "Write only the missing time phrase.", points: 2,
    questions: [
      input("E1", "1. What time does Meg get up? She gets up ___.", ["at 7:00", "at seven", "at seven o'clock", "at 7 o'clock"], "The clock beside Meg's bed shows 7:00.", A + "page2-img2-399x199.png"),
      input("E2", "2. When does Bill play soccer? He plays soccer ___.", ["on Saturday"], "The calendar marks soccer on Saturday, November 5.", A + "page2-img3-399x199.png")
    ]
  },
  {
    key: "F", label: "F", title: "Write the words in the correct order to make questions. Then listen and write the answers.",
    note: "Each number has two answers: the complete question and the answer from the audio.", points: 6,
    audio: "assets/audio/Listening-F.mp3",
    questions: [
      { id: "F1", type: "paired", points: 2, prompt: "1. he / When / does / homework / do", parts: [
        { key: "question", label: "Complete question", type: "input", answers: ["When does he do homework?", "When does he do homework"], explanation: "Use When + does + subject + base verb: When does he do homework?" },
        { key: "answer", label: "Answer from the audio", type: "input", answers: ["He does homework at night.", "He does homework at night"], explanation: "The audio answer is: He does homework at night." }
      ]},
      { id: "F2", type: "paired", points: 2, prompt: "2. do / soccer / play / they / When", parts: [
        { key: "question", label: "Complete question", type: "input", answers: ["When do they play soccer?", "When do they play soccer"], explanation: "Use When + do + subject + base verb: When do they play soccer?" },
        { key: "answer", label: "Answer from the audio", type: "input", answers: ["They play soccer on Sunday.", "They play soccer on Sunday"], explanation: "The audio answer is: They play soccer on Sunday." }
      ]},
      { id: "F3", type: "paired", points: 2, prompt: "3. lunch / eat / does / When / she", parts: [
        { key: "question", label: "Complete question", type: "input", answers: ["When does she eat lunch?", "When does she eat lunch"], explanation: "Use When + does + subject + base verb: When does she eat lunch?" },
        { key: "answer", label: "Answer from the audio", type: "input", answers: ["She eats lunch at two o'clock.", "She eats lunch at two o'clock", "She eats lunch at 2:00.", "She eats lunch at 2:00", "She eats lunch at two.", "She eats lunch at two"], explanation: "The audio answer is: She eats lunch at two o'clock, or 2:00." }
      ]}
    ]
  },
  {
    key: "G", label: "G", title: "Complete the sentences.",
    note: "Use: does interviews, give a concert, have lunch, made a mistake, talks to fans. One phrase is extra.", points: 4,
    questions: [
      input("G1", "1. I'm hungry. Let's ___.", ["have lunch"], "People have lunch when they are hungry at lunchtime."),
      input("G2", "2. I ___ on the test. I got one wrong.", ["made a mistake"], "Getting one answer wrong means that the speaker made a mistake."),
      input("G3", "3. The band will ___ on Tuesday. I bought a ticket!", ["give a concert"], "A band gives a concert, and people buy tickets to watch it."),
      input("G4", "4. The reporter ___ with important people.", ["does interviews"], "A reporter does interviews by asking people questions.")
    ]
  },
  {
    key: "H", label: "H", title: "Look and complete the words.",
    note: "Use the picture and the given letters to complete each word.", points: 3,
    questions: [
      input("H1", "1. t _ a _ _", ["tears"], "The drops from the girl's eyes are tears.", A + "h1-tears.png"),
      input("H2", "2. _ h _   _ l _", ["the flu", "flu"], "The boy is ill with the flu.", A + "h2-flu.png"),
      input("H3", "3. _ o _ e _", ["notes"], "The symbols written on music lines are notes.", A + "h3-notes.png")
    ]
  },
  {
    key: "I", label: "I", title: "Unscramble the words. Then match.",
    note: "The letters a, b, and c are the original picture labels. Unscramble each word, then choose its picture.", points: 6,
    sectionImage: A + "section-i-pictures.png",
    questions: [
      { id: "I1", type: "paired", points: 2, prompt: "1. u i c i n m s a", parts: [
        { key: "word", label: "Unscrambled word", type: "input", answers: ["musician"], explanation: "The letters form musician." },
        { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Picture b shows a musician playing the guitar." }
      ]},
      { id: "I2", type: "paired", points: 2, prompt: "2. o i d r r w e", parts: [
        { key: "word", label: "Unscrambled word", type: "input", answers: ["worried"], explanation: "The letters form worried." },
        { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Picture c shows a worried girl." }
      ]},
      { id: "I3", type: "paired", points: 2, prompt: "3. w i t a", parts: [
        { key: "word", label: "Unscrambled word", type: "input", answers: ["wait"], explanation: "The letters form wait." },
        { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Picture a shows two people waiting at a bus stop." }
      ]}
    ]
  },
  {
    key: "J", label: "J", title: "Look and complete the sentences.",
    note: "Use last, this, morning, or night.", points: 2,
    questions: [
      input("J1", "1. She played music ___.", ["this morning"], "The sun and the morning clock show that she played music this morning.", A + "page4-img1-399x199.png"),
      input("J2", "2. He went shopping ___.", ["last night"], "The moon shows night, and the completed phrase is last night.", A + "page4-img5-400x199.png")
    ]
  },
  {
    key: "K", label: "K", title: "Listen and circle the correct words.",
    note: "Choose the time phrase you hear.", points: 4,
    audio: "assets/audio/Listening-K.mp3",
    questions: [
      choice("K1", "1. She played baseball ___.", ["today", "yesterday afternoon"], "yesterday afternoon", "The audio says she played baseball yesterday afternoon."),
      choice("K2", "2. She went shopping ___.", ["this morning", "last week"], "last week", "The audio says she went shopping last week."),
      choice("K3", "3. He read a book ___.", ["today", "yesterday evening"], "today", "The audio says he read a book today."),
      choice("K4", "4. He did homework ___.", ["last night", "this evening"], "last night", "The audio says he did homework last night.")
    ]
  },
  {
    key: "L", label: "L", title: "Write the questions. Then look at the pictures and write the answers.",
    note: "Use last and this with afternoon, evening, or night.", points: 6,
    questions: [
      { id: "L1", type: "paired", points: 2, prompt: "1. she / When / did / give / a / concert", image: A + "page4-img2-399x199.png", parts: [
        { key: "question", label: "Complete question", type: "input", answers: ["When did she give a concert?", "When did she give a concert"], explanation: "Use When + did + subject + base verb: When did she give a concert?" },
        { key: "answer", label: "Complete answer", type: "input", answers: ["She gave a concert last night.", "She gave a concert last night"], explanation: "The picture shows a concert at night, so the answer is: She gave a concert last night." }
      ]},
      { id: "L2", type: "paired", points: 2, prompt: "2. did / talk / she / to / fans / When", image: A + "page4-img3-399x199.png", parts: [
        { key: "question", label: "Complete question", type: "input", answers: ["When did she talk to fans?", "When did she talk to fans"], explanation: "Use When + did + subject + base verb: When did she talk to fans?" },
        { key: "answer", label: "Complete answer", type: "input", answers: ["She talked to fans this afternoon.", "She talked to fans this afternoon"], explanation: "The time cue is afternoon, so the answer is: She talked to fans this afternoon." }
      ]},
      { id: "L3", type: "paired", points: 2, prompt: "3. did / do / an / When / interview / she", image: A + "page4-img4-399x199.png", parts: [
        { key: "question", label: "Complete question", type: "input", answers: ["When did she do an interview?", "When did she do an interview"], explanation: "Use When + did + subject + base verb: When did she do an interview?" },
        { key: "answer", label: "Complete answer", type: "input", answers: ["She did an interview this evening.", "She did an interview this evening"], explanation: "The time cue is evening, so the answer is: She did an interview this evening." }
      ]}
    ]
  }
];

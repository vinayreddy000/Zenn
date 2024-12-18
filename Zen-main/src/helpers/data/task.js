import meditateAnimation from '@/assets/animations/meditate.json'
import jogAnimation from '@/assets/animations/jog.json'
import readAnimation from '@/assets/animations/read.json'
import listenAnimation from '@/assets/animations/listen.json'
import talkAnimation from '@/assets/animations/talk.json'

const tasks = [
  {
    id:0,
    name: 'Meditate',
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=d4S4twjeWTs',
    description: [
      'Do 10 sets of breathing exercises',
      'Do 10 minutes Yoga sequence',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity”',
      author: '— Baba Ram Dass',
    },
    animationData: meditateAnimation,
  },
  {
    id:1,
    name: 'Jog',
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=KxKJEIqS1HQ',
    description: [
      'Do 5 minutes brisk walking',
      'Do 10 minutes jogging',
      'Do 5 minutes marching in place or knee lifts',
    ],
    quote: {
      description: '“Running allows me to set my mind free”',
      author: '— Kara Goucher',
    },
   animationData: jogAnimation,
  },
  {
    id:2,
    name: 'Read',
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=K4Tn4tv836A',
    description: ['Read newspaper', 'Read novels, poetry, humor, fiction etc'],
    quote: {
      description:
        '“There is more treasure in books than in all the pirate’s loot on Treasure Island”',
      author: '— Walt Disney',
    },
    animationData: readAnimation 
  },
  {
    id:3,
    name: 'Listen',
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=ez3GgRqhNvA',
    description: ['Listen to a podcast', 'Listen to music'],
    quote: {
      description:
        '“We have two ears and one tongue so that we would listen more and talk less”',
      author: '— Diogenes',
    },
  animationData: listenAnimation 
  },
  {
    id:4,
    name: 'Talk',
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=A_eG1md3YuY',
    description: ['Talk to your friends', 'Talk to your family'],
    quote: {
      description:
        '“A lot of problems in the world would be solved if we talked to each other instead of about each other”',
      author: '— Nickey Gumbel',
    },
    animationData: talkAnimation
  },
]

export default tasks
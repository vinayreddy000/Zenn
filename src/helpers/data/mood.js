import happyAnimation from '@/assets/animations/happy.json'
import anxiousAnimation from '@/assets/animations/anxious.json'
import stressAnimation from '@/assets/animations/stress.json'
import sadAnimation from '@/assets/animations/sad.json'
import depressedAnimation from '@/assets/animations/depressed.json'

const moods = [
  {
    id:0,
    name: 'Happy',
    animationData: happyAnimation ,
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
    description: [
      'Do 10 sets of breathing exercises.',
      'Do 10 minutes Yoga sequence.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
  },
  {
    id:1,
    name: 'Anxious',
    animationData: anxiousAnimation ,
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
    description: [
      'Do 10 sets of breathing exercises.',
      'Do 10 minutes Yoga sequence.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
  },
  {
    id:2,
    name: 'Stress',
    animationData: stressAnimation,
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
    description: [
      'Do 10 sets of breathing exercises.',
      'Do 10 minutes Yoga sequence.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
  },
  {
    id:3,
    name: 'Sad',
    animationData: sadAnimation ,
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
    description: [
      'Do 10 sets of breathing exercises.',
      'Do 10 minutes Yoga sequence.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
  },
  {
    id:4,
    name: 'Depressed',
    animationData: depressedAnimation,
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
    description: [
      'Do 10 sets of breathing exercises.',
      'Do 10 minutes Yoga sequence.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
  },
]

export default moods
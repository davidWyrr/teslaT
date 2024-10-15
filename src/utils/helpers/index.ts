import PeopleView from "@/views/PeopleView.vue";
import ReportView from "@/views/ReportView.vue";
import reportIcon from '@/assets/icons/report.svg'
import PeopleIcon from '@/assets/icons/People.svg'
import libIcon from '@/assets/icons/libaray.svg'
import activityIcon from '@/assets/icons/activity.svg'
import getStartedIcon from '@/assets/icons/Bulb.svg'
import settingIcon from '@/assets/icons/Settings.svg'
import Image1 from '@/assets/icons/imgTest.svg'
import Image2 from '@/assets/icons/covid.svg'
import Image3 from '@/assets/icons/party.svg'
import user1 from '@/assets/icons/Thomas.svg'
import user2 from '@/assets/icons/user2.svg'
import user3 from '@/assets/icons/user3.svg'
import user4 from '@/assets/icons/user4.svg'

export const routesList = [
    {
      path: '/',
      name: 'report',
      component: ReportView,
      icon : reportIcon
    },
    {
      path: '/test',
      name: 'Library',
      component: PeopleView,
       icon : libIcon
    },
    
      {
        path: '/people',
        name: 'people',
        component: PeopleView,
         icon : PeopleIcon
      },
      {
        path: '/test',
        name: 'Activities',
        component: ReportView,
        icon : activityIcon
      },
      {
        path: '/test',
        name: 'Get Started',
        component: ReportView,
        icon : getStartedIcon
      },
      {
        path: '/test',
        name: 'Settings',
        component: ReportView,
        icon : settingIcon
      },
  ]

  export const FoodProgressData = [
    {
        id: 1,
        title: 'Food Safety',
        count: 74,
        imageUrl: Image1,
        color: '#FF814C'
    },
    {
        id: 2,
        title: 'Compliance Basics Procedures ',
        count: 52,
        imageUrl: Image2,
        color: '#FF814C'
    },
    {
        id: 3,
        title: 'Company Networking',
        count: 36,
        imageUrl: Image3,
        color: '#FF814C'
    }
]

export const StrongestProgressData = [
    {
        id: 1,
        title: 'Covid Protocols ',
        count: 95,
        imageUrl: Image2,
        color: '#4BE683'
    },
    {
        id: 2,
        title: 'Cyber Security Basics  ',
        count: 92,
        imageUrl: Image1,
        color: '#4BE683'
    },
    {
        id: 3,
        title: 'Social Media Policies',
        count: 89,
        imageUrl: Image3,
        color: '#4BE683'
    }
]

export const TopicSectionArray = [
    {
        id: 1,
        TopicTitle: 'Weakest Topics ',
        topics: FoodProgressData
    },
    {
        id: 2,
        TopicTitle: 'Strongest Topics',
        topics: StrongestProgressData
    },

]

export const user = [
    {
        name: 'Jesse Thomas',
        percount: 98,
        imageUrl: user1,
        isSucessful: true,

    },
    {
        name: 'Thisal Mathiyazhagan',
        percount: 89,
        imageUrl: user2,
        isSucessful: false,
    },
    {
        name: 'Helen Chuang',
        percount: 88,
        imageUrl: user3,
        isSucessful: true,
    },
    {
        name: 'Lura Silverman',
        percount: 88,
        imageUrl: user4,
        isSucessful: true,
    },

]

export const group = [
    {
        name: 'Houston Facility',
        percount: 97,
        isSucessful: true,
    },
    {
        name: 'Test Group',
        percount: 95,
        isSucessful: false,
    },
    {
        name: 'Sales Leadership',
        percount: 97,
        isSucessful: true,
    },
    {
        name: 'Northeast Region',
        percount: 97,
        isSucessful: true,
    },
]

export const LeaderShipSectionArray = [
    {
        id: 1,
        TopicTitle: 'User Leaderboard',
        topics: user
    },
    {
        id: 2,
        TopicTitle: 'Groups Leaderboard',
        topics: group
    },

]

export const cardList = [
    {
        cardTitle: 'Active Users',
        subTitle: '27',
        spanDetails: '/80',
        isChart: false,
        isIcon: false
    },
    {
        cardTitle: 'Questions Answered',
        subTitle: '3,298',
        isChart: false,
        isIcon: false
    },
    {
        cardTitle: 'Av. Session Length',
        subTitle: '2m 34s',
        isChart: false,
        isIcon: false
    },
    {
        cardTitle: 'Starting Knowledge',
        subTitle: '64%',
        isChart: true,
        isIcon: true
    },
    {
        cardTitle: 'Current Knowledge',
        subTitle: '86%',
        isChart: true,
        isIcon: false
    },
    {
        cardTitle: 'Knowledge Gain',
        subTitle: '+34%',
        isChart: true,
        isIcon: false
    },

]
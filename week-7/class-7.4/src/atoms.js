import { atom } from 'recoil'

export const NetworkCount = atom({
    key: 'NetworkCount',
    default: 34
})

export const JobsCount = atom({
    key: 'JobsCount',
    default: 10
})

export const MessagesCount = atom({
    key: 'MessagesCount',
    default: 24
})

export const NotificationsCount = atom({
    key: 'NotificationCount',
    default: 110
})

import { atom, selector } from 'recoil'

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

export const TotalCount = selector({
    key: 'TotalCount',
    get: ({get}) => {
        const networkCount = get(NetworkCount)
        const jobsCount = get(JobsCount)
        const notificationCount = get(NotificationsCount)
        const messageCount = get(MessagesCount) 
        return notificationCount + messageCount + jobsCount + networkCount
    }
})
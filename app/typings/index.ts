export type Status = 'backlog' | 'in-progress' | 'completed'

export interface Task {
	id: string
	status: Status
	title: string
	description?: string
	creater: User
	labels: string[]
}

export interface User {
	id: string
	username: string
	displayName: string
	avatarURL: string
}

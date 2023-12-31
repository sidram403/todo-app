import Information from '@/components/Information/Information'
import SideNav from '@/components/SideNav/SideNav'
import StatusPane from '@/components/StatusPane/StatusPane'
import StickyHeader from '@/components/StickyHeader/StickyHeader'
import styles from '@/styles/dashboard.module.scss'
import Image from 'next/image'
import { mockTasks } from '@/utils'

export const metadata = {
	title: 'Taskmanager | Dashboard',
	description: 'Manager all your tasks here',
}

export default function Dashboard() {
	return (
		<div className={styles.wrapper}>
			<SideNav />
			<div className={styles.layerContainer}>
				<StickyHeader />
				<div className={styles.content}>
					<main className={styles.main}>
						<Information />
						<div>
							<h1 className={styles.header}>
								All My Tasks
								<Image
									src={'/svg/pencil.svg'}
									alt="pencil-icon"
									style={{ marginLeft: '10px' }}
									height={24}
									width={24}
								/>
							</h1>
							<div className={styles.subHeader}>
								Managing your tasks is easy with Taskmanager
							</div>
							<div className={styles.taskContainer}>
								<StatusPane
									status="backlog"
									tasks={mockTasks('backlog').filter(
										task => (task.status = 'backlog')
									)}
								/>
								<StatusPane status="in-progress" tasks={[]} />
								<StatusPane status="completed" tasks={[]} />
							</div>
						</div>
					</main>
					<aside className={styles.aside}></aside>
				</div>
			</div>
		</div>
	)
}

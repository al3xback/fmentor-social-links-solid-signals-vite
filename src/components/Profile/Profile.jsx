import { createSignal, For } from 'solid-js';

import { PROFILE } from '../../data';
import styles from './Profile.module.css';

export default function Profile() {
	const [profile, setProfile] = createSignal(PROFILE);
	const { image, name, location, job, socialLinks } = profile();

	return (
		<div class={styles.profile}>
			<img src={image} width={80} height={80} alt={name} />
			<div class={styles['title-box']}>
				<h2>{name}</h2>
				<p>{location}</p>
			</div>
			<p>&Prime;{job}&Prime;</p>
			<ul class={styles['social-links']}>
				<For each={socialLinks}>
					{(link) => (
						<li>
							<a
								href={link.url}
								class='btn btn--primary btn--full'
								rel='noopener'
								target='_blank'
							>
								{link.name}
							</a>
						</li>
					)}
				</For>
			</ul>
		</div>
	);
}

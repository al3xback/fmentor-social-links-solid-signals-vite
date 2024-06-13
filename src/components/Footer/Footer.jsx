import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer class={styles.footer}>
			<div class={styles.container}>
				<p>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						class='btn btn--link'
						rel='noopener'
						target='_blank'
					>
						Frontend Mentor
					</a>
					. Coded by{' '}
					<a
						href='https://github.com/al3xback'
						class='btn btn--link'
						rel='noopener'
						target='_blank'
					>
						al3xback
					</a>
					.
				</p>
			</div>
		</footer>
	);
}

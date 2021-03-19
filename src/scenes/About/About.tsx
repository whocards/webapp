import React from 'react'
import { Helmet } from 'react-helmet-async'
import './About.css'

interface AboutProps {}

export const About: React.FunctionComponent<AboutProps> = () => {
	return (
		<>
			<Helmet>
				<title>Who Cards - About</title>
			</Helmet>
			<div className='about-wrapper'>
				<h1 className='about-title'>who are you?</h1>
				<p>Simply put, we believe you are not what you do.<br />So we created a game to connect through-and-through.</p>
				<p>When we play this game we learn who we are,<br />we learn about ‘others’ both near and far. </p>
				<p>There are much better questions than exchanging credentials.<br />Conversations build relations, which reveal our potential.</p>
				<p>This is a game of listening, a game of rapt questions,<br />A game of  courage and of deeper connection.</p>
				<p>In a world made of words, good questions do matter.<br />Language transforms our brain’s inner chatter.</p>
				<p>Transforming our thoughts takes practice and persistence,<br />Words create our reality and relations; they change our existence.</p>
				<p>In these urgent times, it is best to slow down<br />To pause and to ask ‘WHO’ is around?</p>
				<p>Our connection holds immeasurable worth<br />As we unmask ourselves, home on mother earth.</p>
				<p>‘WHO Cards’ are helpers in school, job, or home<br />By playing we realize we are never alone.</p>
				<p>Download a set in your language of choice,<br />Play online or in-person to reveal ‘our’ voice.</p>
			</div>
		</>
	)
}

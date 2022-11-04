import slackIcon from '../assets/slackIcon.svg';
import github from '../assets/github.svg';

const slackGiticons = () => {

return(
  <section className="slack-and-git-icon">
    <span><img className='slack-icon' src={slackIcon} /></span>
    <span><img className='github-icon' src={github} /></span>
  </section>
)

}

export default slackGiticons
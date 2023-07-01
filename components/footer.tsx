import { FC } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillMediumCircle, AiFillTwitterCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

const Footer: FC = () => {
  return (
    <footer className="mt-28 mb-8">
      <div className="w-full bg-black text-center lg:pl-20 lg:pt-4 lg:text-left">
        <p className="text-white font-light text-2xl">
          Reach me through:
        </p>
      </div>
      <div className="w-full bg-black py-4 px-6 flex justify-around text-white">
        {footerSocials.map((footer) => (       
          <div>
            <div 
              className="text-4xl hover:text-slate-600 cursor-ne-resize"
              onClick={() => window.open(footer.link, '_blank')}
              data-tooltip-id={footer.name}>
              {footer.logo}
            </div>

            <Tooltip id={footer.name}>
              <div className="lg:text-xl text-slate-300">
                <TooltipContent name={footer.name} />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </footer>
  )
}

const footerSocials = [
  {
    name: 'github',
    link: 'https://github.com/Arceister',
    logo: <AiFillGithub />,
  }, 
  {
    name: 'medium',
    link: 'https://medium.com/@arceister',
    logo: <AiFillMediumCircle />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/imandajagad/',
    logo: <AiFillLinkedin />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/Arceister',
    logo: <AiFillTwitterCircle />,
  },
  {
    name: 'email',
    link: 'mailto:imandajagad01@gmail.com',
    logo: <AiFillMail />,
  },
]

type TooltipContentProps = {
  name?: string
}

const TooltipContent= ({name}: TooltipContentProps) => {
  const specificColor = "font-bold"

  return (
    <div className="text-center text-white">
      {name === "github" ? 
      <p>
        Check out my codes and projects on <span className={specificColor}>Github</span>
      </p> : name === "medium" ?
      <p>
        Sometimes I write a content<br/>
        (not limited to programming) on <span className={specificColor}>Medium</span>
      </p> : name === "linkedin" ?
      <p>
        Find me on <span className={specificColor}>Linkedin</span>
      </p> : name === "twitter" ?
      <p>
        I often tweet about<br/>
        programming on my <span className={specificColor}>Twitter</span>
      </p> :
      <p>
        Have any amazing ideas, or want to<br/>
        discuss something? Reach me on<br/>
        <span className={specificColor}>imandajagad01@gmail.com</span>
      </p>}
    </div>
  )
}

export default Footer;
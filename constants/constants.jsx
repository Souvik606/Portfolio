import  PythonLogo from '/python.svg'
import  JSLogo from '/javascript.svg'
import  CLogo from '/c.svg'
import  CplusplusLogo from '/c-plusplus.svg'
import  JavaLogo from '/java.svg'
import  TSLogo from '/typescript.svg'
import  NodeLogo from '/nodejs.svg'
import  ReactLogo from '/react_light.svg'
import  TailwindLogo from '/tailwindcss.svg'
import  NextLogo from '/nextjs_icon_dark.svg'
import  MySQLLogo from '/mysql.svg'
import  PSQLLogo from '/postgresql.svg'
import  MongoLogo from '/mongodb.svg'
import  GitLogo from '/git.svg'
import  GitHubLogo from '/github_light.svg'
import  VSLogo from '/vscode.svg'
import  PostManLogo from '/postman.svg'
import  HTMLLogo from '/html5.svg'
import  CSSLogo from '/css_old.svg'

const skills = {
  Languages: {
    Proficient: [
      { name: 'Python', logo: PythonLogo },
      { name: 'JavaScript', logo: JSLogo },
    ],
    Familiar: [
      { name: 'C', logo: CLogo },
      { name: 'C++', logo: CplusplusLogo },
      { name: 'Java', logo: JavaLogo },
      { name: 'TypeScript', logo: TSLogo },
    ],
  },
  'Frameworks and Libraries': {
    All: [
      { name: 'Node.js', logo: NodeLogo },
      { name: 'React.js', logo: ReactLogo },
      { name: 'Next.js', logo: NextLogo },
      { name: 'Tailwind CSS', logo: TailwindLogo },
      { name: 'React Native', logo: ReactLogo },
    ],
  },
  Databases: {
    All: [
      { name: 'MySQL', logo: MySQLLogo },
      { name: 'PostgreSQL', logo: PSQLLogo },
      { name: 'MongoDB', logo: MongoLogo },
    ],
  },
  Tools: {
    All: [
      { name: 'Git', logo: GitLogo },
      { name: 'GitHub', logo: GitHubLogo },
      { name: 'VS Code', logo: VSLogo },
      { name: 'Postman', logo: PostManLogo },
    ],
  },
  Others: {
    All: [
      { name: 'HTML5', logo: HTMLLogo },
      { name: 'CSS3', logo: CSSLogo },
    ],
  },
};

export default skills;
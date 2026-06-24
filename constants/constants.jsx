import GoLogo from '/go.svg'
import CplusplusLogo from '/c-plusplus.svg'
import PythonLogo from '/python.svg'
import JSLogo from '/javascript.svg'
import TSLogo from '/typescript.svg'
import CLogo from '/c.svg'
import JavaLogo from '/java.svg'
import NodeLogo from '/nodejs.svg'
import ReactLogo from '/react_light.svg'
import NextLogo from '/nextjs_icon_dark.svg'
import TailwindLogo from '/tailwindcss.svg'
import ShadCNLogo from '/shadcnui.svg'
import OpenCVLogo from '/opencv.svg'
import MySQLLogo from '/mysql.svg'
import PSQLLogo from '/postgresql.svg'
import MongoLogo from '/mongodb.svg'
import GitLogo from '/git.svg'
import GitHubLogo from '/github_light.svg'
import DockerLogo from '/docker.svg'
import VSLogo from '/vscode.svg'
import PostManLogo from '/postman.svg'
import PrismaLogo from '/prisma.svg'
import TerraformLogo from '/terraform.svg'
import AWSLogo from '/aws.svg'
import GRPCLogo from '/grpc.svg'
import HTMLLogo from '/html5.svg'
import CSSLogo from '/css_old.svg'

const skills = {
  Languages: {
    Proficient: [
      { name: 'Go', logo: GoLogo },
      { name: 'C++', logo: CplusplusLogo },
      { name: 'Python', logo: PythonLogo },
      { name: 'JavaScript', logo: JSLogo },
    ],
    Familiar: [
      { name: 'TypeScript', logo: TSLogo },
      { name: 'C', logo: CLogo },
      { name: 'Java', logo: JavaLogo },
    ],
  },
  'Frameworks & Libraries': {
    All: [
      { name: 'Node.js', logo: NodeLogo },
      { name: 'React.js', logo: ReactLogo },
      { name: 'Next.js', logo: NextLogo },
      { name: 'Tailwind CSS', logo: TailwindLogo },
      { name: 'ShadCN', logo: ShadCNLogo },
      { name: 'OpenCV', logo: OpenCVLogo },
    ],
  },
  'Cloud & Infrastructure': {
    All: [
      { name: 'AWS', logo: AWSLogo },
      { name: 'gRPC', logo: GRPCLogo },
      { name: 'Terraform', logo: TerraformLogo },
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
      { name: 'Docker', logo: DockerLogo },
      { name: 'VS Code', logo: VSLogo },
      { name: 'Postman', logo: PostManLogo },
      { name: 'Prisma', logo: PrismaLogo },
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
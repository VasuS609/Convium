import Card from './Card'
import SideBarLink from './SibeBarLink'
const links = [
    {
        label: 'Home',
        icon: 'Grid' as const,
        link: '/home'

    },
    {
        label: 'Calendar',
        icon: 'Calendar' as const,
        link: '/calendar'

    },
    { label: "Profile", icon: "User" as const, link: "/profile" },
    {
        label: 'Settings',
        icon: 'Settings' as const,
        link: '/settings'
    }
]

const SideBar: React.FC = () => {
    return (
        <Card className="h-full w-40 flex items-center justify-between flex-wrap">
          <div className="w-full flex justify-center items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
          </div>
          {links.map((link, i) => (
            <SideBarLink key={i} link={link} />
          ))}
        </Card>
      );
}
export default SideBar
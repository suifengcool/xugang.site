// 总览
import Overview from './views/overview';

// 技术栈
import Tech from './views/tech';

// 项目展示
import ProjectPC from './views/project/PC';
import ProjectMobile from './views/project/mobile';
import ProjectPublic from './views/project/public';
import ProjectMiniapp from './views/project/miniapp';

// 会员中心
import Member from './views/member';

// 会员中心
import MsgBoard from './views/msg_board';

// 关于我
import AboutMe from './views/about_me';

// 组件映射
export const components = {
    'overview': <Overview />,
    'tech_stack': <Tech />,
    'project/pc': <ProjectPC />,
    'project/mobile': <ProjectMobile />,
    'project/wechart_public': <ProjectPublic />,
    'project/wechart_miniapp': <ProjectMiniapp />,
    'member': <Member />,
    'msg_board': <MsgBoard />,
    'about_me': <AboutMe />
}
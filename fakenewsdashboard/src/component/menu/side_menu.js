import { ProSidebar,SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useUserContext } from "../../utils/userContext.js";
import { Link } from "react-router-dom";


function SideMenu(){
    const [isAuthenticated,_]  = useUserContext();
    const register_login = (isAuthenticated.auth?(<MenuItem >logout</MenuItem>):(<div><MenuItem >login <Link to="/login" /></MenuItem><MenuItem >Register <Link to="/register" /></MenuItem></div>))
    return(
    <ProSidebar>
        <SidebarHeader>
    <h5>hello {isAuthenticated.username}</h5>
    
  </SidebarHeader>
    <Menu iconShape="square">
    {register_login}
   
        <MenuItem >Dashboard  <Link to="/" /></MenuItem>
        
        
        <SubMenu title="Components">
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
        </SubMenu>
    </Menu>
    </ProSidebar>)
}
export default SideMenu;

import {Link, useNavigate} from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

export default function SideBar() {
    const navigate = useNavigate()
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/dashboard"><i className="fa fa-tachometer-alt"></i> Dashboard</Link>
                </li>
        
                <li>
                    <NavDropdown
                    title={
                        <>
                        <i className="fa fa-product-hunt"></i> Products
                        </>
                    }
                    id='collasible-nav-dropdown'>
                          
                    <NavDropdown.Item  onClick={()=>navigate('/admin/products')}><i className="fa fa-shopping-basket"> All</i> </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>navigate('/admin/products/create')}><i className="fa fa-plus"> Create</i> </NavDropdown.Item>
                   
                </NavDropdown>
            </li>
                <li>
                    <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                </li>

                <li>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                </li>
                <li>
                    <Link to="/admin/reviews"><i className="fa fa-users"></i> Reviews</Link>
                </li>
        
            </ul>
            </nav>
        </div>
    )
}
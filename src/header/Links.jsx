import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../store/categoryslc";

const navItems = ['all', 'tech', 'clothes'];
const LinkContainer = styled.div `
  width: 25%;
  padding-top: 28px;
  box-sizing: border-box;
  display: inline-block;
  body {
    margin:0;padding:0
  }
  a {
    color: black;
    padding: 0px 32px;
    padding-bottom: 32px;
    text-transform: uppercase;
    transition: color 0.3s;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  a:after {    
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after{ 
      background: #5ECE7B;
      width: 100%; 
      left: 0; 
  }
  a:hover, a.active {
    position: relative;
    color: #5ECE7B;
    font-weight: 600;
  }
`

const Links = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const { pathname } = useLocation(); 

  return (
    <LinkContainer>
        {navItems.map((navItem, i) => {
          return (
            <Link key={navItem} to="/" onClick={() => dispatch(categoryActions.changeCategory(i))} className={category.value === i && pathname === "/" ? "active" : ""}>
              {navItem}
            </Link>
          );
        })}
    </LinkContainer>
  );
}
export default Links;
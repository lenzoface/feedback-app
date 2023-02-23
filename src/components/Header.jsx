import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

function Header({text, bgColor, textColor}) {
    // inline styles (not recomended): 
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor,
    }

    return (
      <header style={headerStyles}>
              <div className="container"> 
                <Link to='/' style={{textDecoration: 'none', color: '#ff6a95' }}>
                  <h2>{text}</h2>
                  </Link>
              </div>
          </header>
      )
  }
  
  Header.defaultProps = {
      text: 'Feedback UI',
      bgColor: 'rgba(0,0,0,0.4)',
      textColor: '#ff6a95' 
  }
  
  Header.propTypes = {
      text: PropTypes.string,
      bgColor: PropTypes.string,
      textColor: PropTypes.string
      // .isRequired
  }
  
  export default Header
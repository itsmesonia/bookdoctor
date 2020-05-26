import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'


const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(12)
  },
  a: {
    border: '2px solid black',
    borderRadius: 100,
    height: 'auto',
    padding: theme.spacing(3)
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  buoy: {
    width: 60
  }
})


function ProductSmokingHero(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
      <h1 className='homeTitle'>
        Got any questions? Need help?
      </h1>
      <p className='content'>
        We are here to help. Get in touch!
      </p>
      <a href="mailto: abc@example.com" className={classes.a}>
        <img src="https://i.imgur.com/GQBnuem.png" className={classes.buoy} alt="buoy" />
      </a>
    </Container>
  )
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductSmokingHero)
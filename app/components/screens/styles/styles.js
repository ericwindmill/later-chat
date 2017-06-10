const baseStyles = {
  // Screen flexes 'navs' and main content (container)
  screen: {
    flex: 1,
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 1,
  },
  topNav: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 12,
    height: 10
  },
  container: {
    flex: 1
  },


// reusable UI component styling
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10
  },
  input: {
    height: 50,
    margin: 2,
    padding: 10,
    color: 'black'
  },
  buttonContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center'
  },
  followButton: {
    borderWidth: 1,
    height: 25,
    backgroundColor: '#00bfb2',
    borderRadius: 3,
    padding: 3
  },
  followText: {
    fontFamily: 'Avenir',
    fontSize: 12
  },
  link: {
    textAlign: 'center'
  },
  headlines: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Avenir',
    paddingHorizontal: 12
  },
  headlineTwo: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Avenir'
  }


}

export default baseStyles

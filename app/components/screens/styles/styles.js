const baseStyles = {
  // Screen flexes 'navs' and main content (container)
  screen: {
    flex: 1,
    marginTop: 25
  },
  topNav: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30
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
    textAlign: 'center',
    height: 50,
    margin: 2,
    marginTop: 0,
    padding: 10,
    paddingTop: 2,
    color: 'black'
  },
  buttonContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
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

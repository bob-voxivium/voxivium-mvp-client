import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // --- Root Layout Styles (Used in App.tsx) ---
  fullScreen: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  
  // NEW STYLE: Used by SafeAreaView to apply top padding/margin
  persistentHeaderSafe: {
    backgroundColor: '#ffffffff',
  },

  // NEW STYLE: The inner view content, now managing the fixed height
  persistentHeaderContent: {
    height: 60, // Fixed height for North Panel
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

    headerIcon: {
    color: '#587df7ff',
    fontSize: 24,
  },

  headerLogoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerLogo: {
    height: '70%',
    width: '70%',
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centerPanel: {
    flex: 1, // The Center of the BorderLayout
  },

  // --- Screen Content Styles (Used in screen files) ---
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#7f8c8d',
  },
  paramBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#bdc3c7',
    borderWidth: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  paramTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2980b9',
  },
  paramText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
  },
});

export default styles;

from selenium import webdriver
driver = webdriver.Chrome(executable_path="C:\\Users\\Nick\\Documents\\ChromeDriver\\chromedriver.exe")
driver.get("file:///C:/Users/Nick/Documents/local_git/course-project-a3-thinkofagoodname/groupsite/general/templates/general/download.html")
dropdown = driver.find_element_by_name("Your songs")
dropdown.click()
mp3 = driver.find_element_by_name("mp3")
mp3.click()
wav = driver.find_element_by_name("wav")

# shopping-mall👗
## What is this site for❓
- You can filter clothes by click each buttons

https://user-images.githubusercontent.com/80943394/132836736-d27d14e5-b27b-4893-9794-afab297bacfe.mov

## Main Functions🎀
1. data.json
- I saved all data related clothes in 'data.json' file
<img width="535" alt="스크린샷 2021-09-10 오후 6 53 06" src="https://user-images.githubusercontent.com/80943394/132837053-999bfea4-a64f-47c4-a888-29413254b028.png">

2. Fetch
- I called items from 'data.json' file using 'fetch'
- I made displayItems(items) which show item and
- make setEventListener(items) which is filtered when they click button
<img width="622" alt="스크린샷 2021-09-10 오후 7 14 32" src="https://user-images.githubusercontent.com/80943394/132838751-e7e1ee33-8479-4b2b-8a9f-443d1610c2ea.png">


3. Map 
- Make new array which is 'item list' can be showed on display
- creatHTMLString(item) : make item element dynamically on Javascript with string templete
- displayItems(items) : I made new array using 'map' 
<img width="872" alt="스크린샷 2021-09-10 오후 7 32 00" src="https://user-images.githubusercontent.com/80943394/132840749-a33acad7-288a-462c-8941-3a2cc7138229.png">

 4. data-key and data-value in html
 - Match of data information : make key and value on each buttons from 'index.html'
 - set 'data-key' and 'data-value' on each buttons (index.html)
<img width="1004" alt="스크린샷 2021-09-10 오후 7 45 11" src="https://user-images.githubusercontent.com/80943394/132845314-71b9297e-0938-46fd-a9b5-e172915a7963.png">


5. filter
- so we can make this function and filter items
- displayItems(items.filter(item => item[key] === value))

<img width="872" alt="스크린샷 2021-09-10 오후 7 32 37" src="https://user-images.githubusercontent.com/80943394/132841950-650478c5-fbb5-4668-90ea-3d0b0f9c43ef.png">

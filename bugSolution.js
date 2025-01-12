```javascript
// bugSolution.js

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function fetchData() {
  const starCountRef = ref(db, 'posts/postsId/starCount');
  try {
    const snapshot = await get(starCountRef);
    const data = snapshot.val();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
```
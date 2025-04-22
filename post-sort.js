const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let blogPosts = [
  { id: 3, title: "Javascript'te Asenkron Programlama", content: "Promise, async/await kavramları..." },
  { id: 1, title: "React ile İlk Uygulamamı Geliştirdim", content: "Bileşenler, state yönetimi..." },
  { id: 2, title: "Node.js ile Backend Geliştirmeye Giriş", content: "Express, routing..." },
  { id: 4, title: "Yeni Başlayanlar İçin Git ve GitHub", content: "Versiyon kontrol sistemi..." },
];

function listPosts(posts) {
  if (posts.length === 0) {
    console.log("Henüz hiç post bulunmuyor.");
    return;
  }
  console.log("\n--- Blog Postları ---");
  posts.sort((a, b) => a.title.localeCompare(b.title)).forEach(post => {
    console.log(`ID: ${post.id} - Başlık: ${post.title}`);
  });
  console.log("--------------------");
}

function viewPost(posts, id) {
  const post = posts.find(p => p.id === parseInt(id));
  if (post) {
    console.log(`\n--- Post Detayı (ID: ${post.id}) ---`);
    console.log(`Başlık: ${post.title}`);
    console.log(`İçerik: ${post.content}`);
    console.log("----------------------------------");
  } else {
    console.log(`Belirtilen ID (${id}) ile bir post bulunamadı.`);
  }
}

function addPost(posts, title, content) {
  const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
  const newPost = { id: newId, title: title, content: content };
  posts.push(newPost);
  console.log(`\n--- Yeni Post Eklendi (ID: ${newId}) ---`);
  return posts;
}

function searchPosts(posts, keyword) {
  const results = posts.filter(post =>
    post.title.toLowerCase().includes(keyword.toLowerCase()) ||
    post.content.toLowerCase().includes(keyword.toLowerCase())
  );
  if (results.length > 0) {
    console.log(`\n--- Arama Sonuçları ("${keyword}") ---`);
    results.forEach(post => {
      console.log(`ID: ${post.id} - Başlık: ${post.title}`);
    });
    console.log("----------------------------------");
  } else {
    console.log(`"${keyword}" anahtar kelimesiyle eşleşen bir post bulunamadı.`);
  }
}

function askQuestion(query) {
  return new Promise(resolve => {
    readline.question(query, resolve);
  });
}

async function main() {
  console.log("--- Basit Blog Yönetim Sistemi ---");

  while (true) {
    console.log("\nLütfen bir komut seçin:");
    console.log("1: Postları Listele");
    console.log("2: Yeni Post Ekle");
    console.log("3: Post Görüntüle (ID ile)");
    console.log("4: Post Ara (Başlık veya İçerikte)");
    console.log("5: Çıkış");

    const command = await askQuestion("> ");

    switch (command) {
      case '1':
        listPosts(blogPosts);
        break;
      case '2':
        const newTitle = await askQuestion("Yeni Post Başlığı: ");
        const newContent = await askQuestion("Yeni Post İçeriği: ");
        blogPosts = addPost(blogPosts, newTitle, newContent);
        break;
      case '3':
        const postId = await askQuestion("Görüntülemek istediğiniz Post ID'si: ");
        viewPost(blogPosts, postId);
        break;
      case '4':
        const searchKeyword = await askQuestion("Arama Anahtar Kelimesi: ");
        searchPosts(blogPosts, searchKeyword);
        break;
      case '5':
        console.log("Çıkılıyor...");
        readline.close();
        return;
      default:
        console.log("Geçersiz komut. Lütfen tekrar deneyin.");
    }
  }
}

main();
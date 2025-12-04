// try {
//   let eded = +prompt("Bir eded daxil edin");
//   if (eded == "") {
//     throw new Error("Heç bir məlumat daxil edilməyib");
//   } else if (isNaN(eded)) {
//     throw new Error("Daxil edilən dəyər rəqəm deyil");
//   }else if (eded<0) {
//     throw new Error("Daxil edilən eded menfidir");
//   }else if (eded>500) {
//     throw new Error("Daxil edilən eded 500-den boyukdur");
//   }else{
//     console.log(eded);
//   }
// } catch (error) {
//     console.log(error);
// }

// İstifadəçidən input vasitəsi ilə username tələb edin və username-də bu şərtlər gözlənilməlidir.

// 1. Username ən azı 3 hərfdən ibarət olmalıdır.
// 2.Usernamedə rəqəm istifadə olunmamalıdır
// 3.Username-də mütləq "@" işarəsindən istifadə olunmalıdır.

// Gedişatı və səhvləri try-catch məntiqi ilə idarə edin.

try {
  let username = prompt("Username daxil edin");
  if (username == "") {
    throw new Error("Username daxil edilməyib");
  } else if (username.length < 4) {
    throw new Error("Username ən azı 3 hərfdən ibarət olmalıdır");
  } else if (!isNaN(username)) {
    throw new Error("Username-də rəqəm ola bilməz");
  } else if (!username.includes("@")) {
    throw new Error('Username-də "@" işarəsi olmalıdır');
  } else {
    console.log(username);
  }
  alert("Username düzgündür");
  
} catch (error) {
  console.log(error);
}

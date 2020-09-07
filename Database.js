use SaknyDataBase

///////////////////////admin///////////////////
db.admin.insert({"fullName" : "Hany Saad",
"password" : "$2a$10$IaL49yLOk.iecyhkCb8Gau90FG6gupv2t9hSsYcSMbW99YnA1OCoC",
"phone" : "01017431767",
"email" : "hany.saad22@gmail.com",
"saltSecret" : "$2a$10$IaL49yLOk.iecyhkCb8Gau",
"__v" : 0});


/////////////////////owner///////////////
db.owner.insert({"_id" : ObjectId("5e8d79c109d13f24487e0536"),
"postsOfOwner" : [ 
    "5e8d7a9909d13f24487e0537", 
    "5e8daeb9b3ad832ba4aca071", 
    "5e8daf26b3ad832ba4aca072",
    "5e9b3147e69112f4d6b617de", 
    "5e9b3147e69112f4d6b617df"
],
"fullName" : "اسراء كامل",
"password" : "$2a$10$RtLBSNMmn1l7szzqa.MJVeEZidMbsKNQcJAsh9z.9J4SxEKFgIETO",
"phone" : "01091814386",
"email" : "esraa.kamel@gmail.com",
"imgUrlOwner" : "photo-1564347017243-esraa.jpg",
"status" : true,
"saltSecret" : "$2a$10$RtLBSNMmn1l7szzqa.MJVe",
"__v" : 0});


///////////////////posts//////////////////////
db.post.insert([
    {
        "_id" : ObjectId("5e8d7a9909d13f24487e0537"),
        "Date" : new Date(),
        "Governar" : "أسيوط",
        "District" : "أسيوط",
        "Area" : 150,
        "NumberOfRooms" : 3,
        "Price" : 250,
        "Street" : "الحمهورية",
        "NumberOfBeds" : 3,
        "Available_NumberOfBeds" : 2,
        "ImageUrl" : "photo-1586330262789-photo-1564358067254-download.jpg",
        "Details" : "دور ثاني",
        "status" : true,
        "__v" : 0
    },
    {
        "_id" : ObjectId("5e8daeb9b3ad832ba4aca071"),
        "Date" : new Date(),
        "Governar" : "أسيوط",
        "District" : "أسيوط",
        "Area" : 200,
        "NumberOfRooms" : 3,
        "Price" : 2000,
        "Street" : "المكتبات",
        "NumberOfBeds" : 4,
        "Available_NumberOfBeds" : 2,
        "ImageUrl" : "photo-1586343715703-photo-1564357348473-download (2).jpg",
        "Details" : "شقة سكنيه في الدور الاول",
        "status" : true,
        "__v" : 0
    },
    {
        "_id" : ObjectId("5e8daf26b3ad832ba4aca072"),
        "Date" :new Date(),
        "Governar" : "أسيوط",
        "District" : "أسيوط",
        "Area" : 150,
        "NumberOfRooms" : 2,
        "Price" : 500,
        "Street" : "المكتبات",
        "NumberOfBeds" : 2,
        "Available_NumberOfBeds" : 2,
        "ImageUrl" : "photo-1586343715703-photo-1564357348473-download (2).jpg",
        "Details" : "شقة سكنيه في الدور الاول",
        "status" : true,
        "__v" : 0
    },
    {  
        "_id" : ObjectId("5e9b3147e69112f4d6b617de"),
        "Date" :new Date(),
        "Governar" : "أسيوط",
        "District" : "أسيوط",
        "Area" : 350,
        "NumberOfRooms" : 3,
        "Price" : 1000,
        "Street" : "الجمهوريه ",
        "NumberOfBeds" : 3,
        "Available_NumberOfBeds" : 2,
        "ImageUrl" : "photo-1564353356523-4983546-ebb14o.jpg",
        "Details" : "شقه مفروشه بسعر مناسب",
        "status" : true,
        "__v" : 0
    },
    {
        "_id" : ObjectId("5e9b3147e69112f4d6b617df"),
        "Date" : new Date(),
        "Governar" : "أسيوط",
        "District" : "أسيوط",
        "Area" : 75,
        "NumberOfRooms" : 4,
        "Price" : 1400,
        "Street" : "سيتي المدينه",
        "NumberOfBeds" : 6,
        "Available_NumberOfBeds" : 2,
        "ImageUrl" : "photo-1564357155640-174631058.jpg",
        "Details" : "شقه مفروشه بجوار الجامعه",
        "status" : true,
        "__v" : 0
    }
]);

//////////////////////////student///////////////////
db.student.insert({
    "_id" : ObjectId("5e8d01aef5123a20a8026862"),
    "fullName" : "اسراء كامل",
    "password" : "$2a$10$MaH1KkJzxwI7JdngMaoVxuVOItKU1L1aifEOPZ2ELbDJp2T43Lpo6",
    "phone" : "01091814386",
    "email" : "esraa.kamel@gmail.com",
    "imgUrlStudent" : "photo-1564347017243-esraa.jpg",
    "facultyName" : "الحاسبات والمعلومات",
    "status" : true,
    "saltSecret" : "$2a$10$MaH1KkJzxwI7JdngMaoVxu",
    "__v" : 0
});

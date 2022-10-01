/* ------------------------- navbar section : search field placeholder --------------------------------------- */
var searchFieldEl = document.getElementById("seachFieldId");
/*  placeholder هيحذف ال searchField لما احط الفارة علي ال */
searchFieldEl.onfocus = function()
{
    if( searchFieldEl.getAttribute("placeholder") !== "" )
    {
        searchFieldEl.setAttribute("placeholder","");
    }
}
/*   "search product" بقيمة placeholder هحط ال searchField لما اشيل الفارة من علي ال */
searchFieldEl.onblur = function()
{
    if( searchFieldEl.getAttribute("placeholder") == "" )
    {
        searchFieldEl.setAttribute("placeholder","search product");
    }
}

/* 	************************************ product gallery blocks : All , Phone , Laptop , Headphone , Shoes **************************** */
var allProductEl = document.getElementById("link1Id"),
	phoneProductEl = document.getElementById("link2Id"),
	laptopProductEl = document.getElementById("link3Id"),
	headphoneProductEl = document.getElementById("link4Id"),
	shoesProductEl = document.getElementById("link5Id"),
	watchProductEl = document.getElementById("link6Id"),
 	ulEl = document.getElementById("productGalleryBlocksUlId");

/* #################################### total_width = 100 / 5 = 20% , we have 6 <li></li> #################################### */
// هتظهر لي كل المنتجات في البداية حيث هترجعني للبداية "All" مش هيتحرك لان ال "All" لما اضغط علي اللينك الاول
allProductEl.onclick = function()
{
	ulEl.style.transform="translateX(0%)";
	/*هعطيها اللون العادي  product blocks اللي انا واقف عند عشان اعرف انا واقف عند مين وباقي ال  product block هعطي خلفية برتقالية لل */
	allProductEl.style.backgroundColor="darkorange";
	phoneProductEl.style.backgroundColor="#2980B9";
	laptopProductEl.style.backgroundColor="#2980B9";
	headphoneProductEl.style.backgroundColor="#2980B9";
	shoesProductEl.style.backgroundColor="#2980B9";
	watchProductEl.style.backgroundColor="#2980B9";
}
//  16.65% وهي one block  الثانية فهيتحرك للشمال بالسالب بمقدار بيساوي المسافة بتاع <li></li>هيروح لل "phone" لما اضغط علي اللينك الثاني
phoneProductEl.onclick = function()
{
	ulEl.style.transform="translateX(-16.65%)";
	/* هعطيها اللون العادي  product blocks اللي انا واقف عند عشان اعرف انا واقف عند مين وباقي ال product block هعطي خلفية برتقالية لل */
	phoneProductEl.style.backgroundColor="darkorange";
	allProductEl.style.backgroundColor="#2980B9";
	laptopProductEl.style.backgroundColor="#2980B9";
	headphoneProductEl.style.backgroundColor="#2980B9";
	shoesProductEl.style.backgroundColor="#2980B9";
	watchProductEl.style.backgroundColor="#2980B9";
}
//  33.30% وهي two block  الثالثة فهيتحرك للشمال بالسالب بمقدار بيساوي المسافة بتاع <li></li>هيروح لل "laptop" لما اضغط علي اللينك الثاني
laptopProductEl.onclick = function()
{
	ulEl.style.transform="translateX(-33.30%)";
	/* هعطيها اللون العادي  product blocks اللي انا واقف عند عشان اعرف انا واقف عند مين وباقي ال product block هعطي خلفية برتقالية لل */
	laptopProductEl.style.backgroundColor="darkorange";
	phoneProductEl.style.backgroundColor="#2980B9";
	allProductEl.style.backgroundColor="#2980B9";
	headphoneProductEl.style.backgroundColor="#2980B9";
	shoesProductEl.style.backgroundColor="#2980B9";
	watchProductEl.style.backgroundColor="#2980B9";
}
//  49.94% وهي two block  الرابعة فهيتحرك للشمال بالسالب بمقدار بيساوي المسافة بتاع <li></li>هيروح لل "headphone" لما اضغط علي اللينك الثاني
headphoneProductEl.onclick = function()
{
	ulEl.style.transform="translateX(-49.94%)";
	/* هعطيها اللون العادي  product blocks اللي انا واقف عند عشان اعرف انا واقف عند مين وباقي ال product block هعطي خلفية برتقالية لل */
	headphoneProductEl.style.backgroundColor="darkorange";
	laptopProductEl.style.backgroundColor="#2980B9";
	phoneProductEl.style.backgroundColor="#2980B9";
	allProductEl.style.backgroundColor="#2980B9";
	shoesProductEl.style.backgroundColor="#2980B9";
	watchProductEl.style.backgroundColor="#2980B9";
}
//  66.57% وهي two block  الخامسة فهيتحرك للشمال بالسالب بمقدار بيساوي المسافة بتاع <li></li>هيروح لل "shoes" لما اضغط علي اللينك الثاني
shoesProductEl.onclick = function()
{
	ulEl.style.transform="translateX(-66.57%)";
	/* هعطيها اللون العادي  product blocks اللي انا واقف عند عشان اعرف انا واقف عند مين وباقي ال product block هعطي خلفية برتقالية لل */
	shoesProductEl.style.backgroundColor="darkorange";
	laptopProductEl.style.backgroundColor="#2980B9";
	phoneProductEl.style.backgroundColor="#2980B9";
	allProductEl.style.backgroundColor="#2980B9";
	headphoneProductEl.style.backgroundColor="#2980B9";
	watchProductEl.style.backgroundColor="#2980B9";
}
//  83.21% وهي two block  الخامسة فهيتحرك للشمال بالسالب بمقدار بيساوي المسافة بتاع <li></li>هيروح لل "shoes" لما اضغط علي اللينك الثاني
watchProductEl.onclick = function()
{
	ulEl.style.transform="translateX(-83.21%)";
	/* هعطيها اللون العادي  product blocks اللي انا واقف عند عشان اعرف انا واقف عند مين وباقي ال product block هعطي خلفية برتقالية لل */
	watchProductEl.style.backgroundColor="darkorange";
	laptopProductEl.style.backgroundColor="#2980B9";
	phoneProductEl.style.backgroundColor="#2980B9";
	allProductEl.style.backgroundColor="#2980B9";
	headphoneProductEl.style.backgroundColor="#2980B9";
	shoesProductEl.style.backgroundColor="#2980B9";
}
/* ************************************************** Featured Product section ************************************************* */
var imageIcon1El =  document.getElementById("imgIcon1Id") ,
	imageIcon2El =  document.getElementById("imgIcon2Id") ,
	imageIcon3El =  document.getElementById("imgIcon3Id") ,
	imageIcon4El =  document.getElementById("imgIcon4Id") ,
	imageIcon5El =  document.getElementById("imgIcon5Id") ,
	/* ************************* right part : image info ************************* */
	imageInfoFeatureEl = document.getElementById("rightPartImageInfoId") ,
	/* ********** left part : left part : big image container ********* */ 
	bigImageInfoFeatureEl = document.getElementById("featuredProductBigImgContainerId") ;
	

/* *********** اللي انا ضغطت عليها image icon بتاع ال image info هيجيب ال image icon لما اضغط علي اي *********** */
imageIcon1El.onclick = function()
{
	/* Smart Television وهيرجعني لاول صورة ال ul مش هيحرك ال  */
	imageInfoFeatureEl.style.transform = "translate(0%)" ;
	/* television الي صورة ال big Image يغير ال  */
	bigImgName.src = "images/arr_img1.jpg" ;
	/* icon 1 انه واقف علي الuser عشان اعرف الicons وهشيله من علي باقي ال icon1 لونه احمر علي ال border هحط  */
	imageIcon1El.style.	border = "3px solid #f00" ;	
	imageIcon2El.style.	border = "3px solid #666" ;	
	imageIcon3El.style.	border = "3px solid #666" ;	
	imageIcon4El.style.	border = "3px solid #666" ;	
	imageIcon5El.style.	border = "3px solid #666" ;	
}
imageIcon2El.onclick = function()
{
	/* 20% حيث بيساوي one <li> بتاع width بمقدار ال  second<li> فهيتحرك ال Smart Speakers وهيروح للصورة الثانية حيث صورة ال ul هيحرك ال  */
	imageInfoFeatureEl.style.transform = "translate(-20%)" ;
	/* Smart Speakers الي صورة ال big Image يغير ال  */
	bigImgName.src = "images/arr_img6.jpg" ;
	/* icon 2 انه  واقف علي ال user عشان اعرف ال icons وهشيله من علي باقي ال icon2 لونه احمر علي ال border هحط  */
	imageIcon2El.style.	border = "3px solid #f00" ;	
	imageIcon1El.style.	border = "3px solid #666" ;	
	imageIcon3El.style.	border = "3px solid #666" ;	
	imageIcon4El.style.	border = "3px solid #666" ;	
	imageIcon5El.style.	border = "3px solid #666" ;	
}
imageIcon3El.onclick = function()
{
	/* 40% حيث بيساوي two <li> بتاع width بمقدار ال  third<li> فهيتحرك ال Red Shoes وهيروح للصورة الثالثة حيث صورة ال ul هيحرك ال  */
	imageInfoFeatureEl.style.transform = "translate(-40%)" ;
	/* Red Shoes الي صورة ال big Image يغير ال  */
	bigImgName.src = "images/arr_img3.jpg" ;
	/* icon 3 انه  واقف علي ال user عشان اعرف ال icons وهشيله من علي باقي ال icon3 لونه احمر علي ال border هحط  */
	imageIcon3El.style.	border = "3px solid #f00" ;	
	imageIcon2El.style.	border = "3px solid #666" ;	
	imageIcon1El.style.	border = "3px solid #666" ;	
	imageIcon4El.style.	border = "3px solid #666" ;	
	imageIcon5El.style.	border = "3px solid #666" ;	
}
imageIcon4El.onclick = function()
{
	/* 60% حيث بيساوي three <li> بتاع width بمقدار ال fourth<li> فهيتحرك ال Red Shoes وهيروح للصورة الرابعة حيث صورة ال ul هيحرك ال  */
	imageInfoFeatureEl.style.transform = "translate(-60%)" ;
	/* Smart Phone الي صورة ال big Image يغير ال  */
	bigImgName.src = "images/arr_img4.jpg" ;
	/* icon 4 انه  واقف علي ال user عشان اعرف ال icons وهشيله من علي باقي ال icon4 لونه احمر علي ال border هحط  */
	imageIcon4El.style.	border = "3px solid #f00" ;	
	imageIcon2El.style.	border = "3px solid #666" ;	
	imageIcon1El.style.	border = "3px solid #666" ;	
	imageIcon3El.style.	border = "3px solid #666" ;	
	imageIcon5El.style.	border = "3px solid #666" ;	

}
imageIcon5El.onclick = function()
{
	/* 80% حيث بيساوي fourth <li> بتاع width بمقدار ال fifth<li> فهيتحرك ال Red Shoes وهيروح للصورة الرابعة حيث صورة ال ul هيحرك ال  */
	imageInfoFeatureEl.style.transform = "translate(-80%)" ;
	/* T-Shirt الي صورة ال big Image يغير ال  */
	bigImgName.src = "images/arr_img5.jpg" ;
	/* icon 5 انه  واقف علي ال user عشان اعرف ال icons وهشيله من علي باقي ال icon5 لونه احمر علي ال border هحط  */
	imageIcon5El.style.	border = "3px solid #f00" ;	
	imageIcon2El.style.	border = "3px solid #666" ;	
	imageIcon1El.style.	border = "3px solid #666" ;	
	imageIcon3El.style.	border = "3px solid #666" ;	
	imageIcon4El.style.	border = "3px solid #666" ;	
}
/* ************************************************** newsLetter section ************************************** */	
var footerEmailFieldEl = document.getElementById("emailFieldId") ;
/* placeholder هيحذف ال emailField لما احط الفارة علي ال  */
footerEmailFieldEl.onfocus = function()
{
	if( footerEmailFieldEl.getAttribute("placeholder")!=="" )
	{
		footerEmailFieldEl.setAttribute("placeholder","") ;
	}
}
/* placeholder هيحط ال emailField لما اشيل الفارة من علي ال  */
footerEmailFieldEl.onblur = function()
{
	if( footerEmailFieldEl.getAttribute("placeholder") =="" )
	{
		footerEmailFieldEl.setAttribute("placeholder","enter your email");
	}
}
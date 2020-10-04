<template>
	<div class="rating">
		<div class="rating__wrap">
			<label for="" class="rating__item"></label>
			<label for="" class="rating__item"></label>
			<label for="" class="rating__item"></label>
			<label for="" class="rating__item"></label>
			<label for="" class="rating__item"></label>
		</div>
<!--		<fieldset class="rating">-->
<!--			<input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>-->
<!--			<input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
<!--			<input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>-->
<!--			<input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
<!--			<input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>-->
<!--			<input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
<!--			<input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>-->
<!--			<input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
<!--			<input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>-->
<!--			<input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
<!--		</fieldset>-->


<!--		<button type="button" class="star" @mousemove="ratingOver">-->
<!--			<span class="star__bg">-->
<!--				★★★★★-->
<!--			</span>-->
<!--			<span class="star__active">-->
<!--				★★★★★-->
<!--			</span>-->
<!--		</button>-->
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>
	.rating {
		&__wrap {
			overflow:hidden;
			line-height:1;
		}
		&__item {
			float:right;
			font-size:1.8rem;
			&:before {
				content:'★';
				color:#aaa;
			}
			&:hover {
				&:before {
					color:#ffed85;
				}
				& ~ .rating__item:before {
					color:#ffed85;
				}
			}
		}
	}
	/*fieldset, label { margin: 0; padding: 0; }*/
	/*body{ margin: 20px; }*/
	/*h1 { font-size: 1.5em; margin: 10px; }*/


	/*.rating {*/
	/*	border: none;*/
	/*	float: left;*/
	/*}*/

	/*.rating > input { display: none; }*/
	/*.rating > label:before {*/
	/*	margin: 5px;*/
	/*	font-size: 1.25em;*/
	/*	font-family: FontAwesome;*/
	/*	display: inline-block;*/
	/*	content: "\f005";*/
	/*}*/

	/*.rating > .half:before {*/
	/*	content: "\f089";*/
	/*	position: absolute;*/
	/*}*/

	/*.rating > label {*/
	/*	color: #ddd;*/
	/*	float: right;*/
	/*}*/



	/*.rating > input:checked ~ label, !* show gold star when clicked *!*/
	/*.rating:not(:checked) > label:hover, !* hover current star *!*/
	/*.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } !* hover previous stars in list *!*/

	/*.rating > input:checked + label:hover, !* hover current star when changing rating *!*/
	/*.rating > input:checked ~ label:hover,*/
	/*.rating > label:hover ~ input:checked ~ label, !* lighten current selection *!*/
	/*.rating > input:checked ~ label:hover ~ label { color: #FFED85;  }*/


	.star {
		background:none;
		font-size:28px;
		letter-spacing:-.06rem;
		text-align:center;
		line-height:1em;
		outline:none;
		cursor:pointer;
		&__bg {
			color:rgba(255, 255, 255, 0.4);
		}
		&__active {
			overflow:hidden;
			position:absolute;
			top:0;
			left:0;
			width:0;
			color:rgb(255,183,98);
		}
	}
</style>

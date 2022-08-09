<div id="footer" class="color-div">
	<div class="container">
		<div class="row">
			<div class="col-sm-5">
				<div class="widget">
					<h4 class="widget-title">Phát triển bởi</h4>
					<p style="color:#ff9900;font-weight:500;">Le Ngoc Chi THanh</p>
					<p style="color:#ff9900;font-weight:500;"></p>
					<p style="color:#ff9900;font-weight:500;"></p>

				</div>
			</div>
			<div class="col-sm-3">
				<div class="widget">
					<h4 class="widget-title">Information</h4>
					<div>
						<ul>
							@foreach($menu as $row)
							<li><a href="category/{{$row->id}}"><i class="fa fa-chevron-right"></i>{{$row->name}}</a></li>
							@endforeach
						</ul>
					</div>
				</div>
			</div>
			<div class="col-sm-4">
			 <div class="col-sm-12">
				<div class="widget">
					<h4 class="widget-title">Contact Us</h4>
					<div>
						<div class="contact-info">
							<i class="fa fa-map-marker"></i>
							<p>Bạn có thể liên hệ qua: +84 123 546 789</p>
							<p>70 Nguyễn Huệ - Thành Phố Huế</p>
							<p>64 Hai Bà Trưng - Thành Phố Huế</p>
						</div>
					</div>
				</div>
			  </div>
			</div>
		</div> <!-- .row -->
	</div> <!-- .container -->
</div> <!-- #footer -->
<div class="copyright">
	<div class="container" style="text-align:center;">
		Website được phát triển bởi <span style="color:#ff9900;font-weight:600;">Thanh</span>
	</div> <!-- .container -->
</div> <!-- .copyright -->
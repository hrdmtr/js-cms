
InspectView.AnchorClass 		 = (function(){
	/* ---------- ---------- ---------- */
	var c = function(_a,_b,_c,_d) {
	  this.init(_a,_b,_c,_d);
	}
	var p = c.prototype;
	/* ---------- ---------- ---------- */
	
	p.type
	p.view
	p.val 
	p.callback 
	
	p.init = function(_view,_val,_callback) {
		if(_view.size() == 0)return;
		this.view 	 = _view;
		this.val 	 = _val;
		this.callback  = _callback;
		this.setData();
		this.update(this.val);
	}
	p.setData = function() { 
		var this_ = this;
		//リンク設定の場合
		this.view.off("click");
		this.view.click(function(event){
			Anchor_InputView.stageIn(this_.val,function(_val){
				this_.val = _val
				this_.update(this_.val);
				this_.callback(this_.val);
			})
			event.stopPropagation();
			event.preventDefault();
		});
	}
	p.update = function(_val) { 
		var tag = CMS_AnchorU.getViewTag(_val,false);
		this.view.html(tag);
	}
	p.getVal = function() { 
		return this.val;
	}

	return c;
})();

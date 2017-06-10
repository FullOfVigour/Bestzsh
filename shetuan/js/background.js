window.onload = function(){
			var config = {
				vx: 4,
				vy:  4,
				height: 2,
				width: 2,
				count: 100,
				color: "0, 0, 0",
				stroke: "0,0,0",
				dist: 6000,
				e_dist: 20000,
				max_conn: 100
			}
			CanvasParticle(config);
		}
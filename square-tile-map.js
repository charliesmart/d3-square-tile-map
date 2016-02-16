(function() {
    d3.squareMap = {
        width: null,
        height: null,
        colorSet: 'Blues',
        colorNumber: 6,
        labels: true,
        labelTypeface: 'sans-serif',
        labelStyle: 'ap',
        stateData: {
            "AK": {
                "abbr": "AK",
                "full": "Alaska",
                "ap": "Alaska",
                "x": 48,
                "y": 90,
                "w": 66,
                "h": 66
            },
            "AL": {
                "abbr": "AL",
                "full": "Alabama",
                "ap": "Ala.",
                "x": 552,
                "y": 450,
                "w": 66,
                "h": 66
            },
            "AR": {
                "abbr": "AR",
                "full": "Arkansas",
                "ap": "Ark.",
                "x": 408,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "AZ": {
                "abbr": "AZ",
                "full": "Arizona",
                "ap": "Ariz.",
                "x": 192,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "CA": {
                "abbr": "CA",
                "full": "California",
                "ap": "Calif.",
                "x": 120,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "CO": {
                "abbr": "CO",
                "full": "Colorado",
                "ap": "Colo.",
                "x": 264,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "CT": {
                "abbr": "CT",
                "full": "Connecticut",
                "ap": "Conn.",
                "x": 768,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "DC": {
                "abbr": "DC",
                "full": "Washington, D.C.",
                "ap": "D.C.",
                "x": 696,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "DE": {
                "abbr": "DE",
                "full": "Delaware",
                "ap": "Del.",
                "x": 768,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "FL": {
                "abbr": "FL",
                "full": "Florida",
                "ap": "Fla.",
                "x": 696,
                "y": 522,
                "w": 66,
                "h": 66
            },
            "GA": {
                "abbr": "GA",
                "full": "Georgia",
                "ap": "Ga.",
                "x": 624,
                "y": 450,
                "w": 66,
                "h": 66
            },
            "HI": {
                "abbr": "HI",
                "full": "Hawaii",
                "ap": "Hawaii",
                "x": 120,
                "y": 522,
                "w": 66,
                "h": 66
            },
            "IA": {
                "full": "Iowa",
                "ap": "Iowa",
                "x": 408,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "ID": {
                "full": "Idaho",
                "ap": "Idaho",
                "x": 192,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "IL": {
                "full": "Illinois",
                "ap": "Ill.",
                "x": 480,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "IN": {
                "full": "Indiana",
                "ap": "Ind.",
                "x": 480,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "KS": {
                "full": "Kansas",
                "ap": "Kan.",
                "x": 336,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "KY": {
                "full": "Kentucky",
                "ap": "Ky.",
                "x": 480,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "LA": {
                "full": "Louisiana",
                "ap": "La.",
                "x": 408,
                "y": 450,
                "w": 66,
                "h": 66
            },
            "MA": {
                "full": "Massachusetts",
                "ap": "Mass.",
                "x": 768,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "MD": {
                "full": "Maryland",
                "ap": "Md.",
                "x": 696,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "ME": {
                "full": "Maine",
                "ap": "Maine",
                "x": 840.8,
                "y": 18,
                "w": 66,
                "h": 66
            },
            "MI": {
                "full": "Michigan",
                "ap": "Mich",
                "x": 552,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "MN": {
                "full": "Minnesota",
                "ap": "Minn.",
                "x": 408,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "MO": {
                "full": "Missouri",
                "ap": "Mo.",
                "x": 408,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "MS": {
                "full": "Mississippi",
                "ap": "Miss.",
                "x": 480.5,
                "y": 450,
                "w": 66,
                "h": 66
            },
            "MT": {
                "full": "Montana",
                "ap": "Mont.",
                "x": 264,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "NC": {
                "full": "North Carolina",
                "ap": "N.C.",
                "x": 552,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "ND": {
                "full": "North Dakota",
                "ap": "N.D.",
                "x": 336,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "NE": {
                "full": "Nebraska",
                "ap": "Neb.",
                "x": 336,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "NH": {
                "full": "New Hampshire",
                "ap": "N.H.",
                "x": 840.8,
                "y": 90,
                "w": 66,
                "h": 66
            },
            "NJ": {
                "full": "New Jersey",
                "ap": "N.J.",
                "x": 696,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "NM": {
                "full": "New Mexico",
                "ap": "N.M.",
                "x": 264,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "NV": {
                "full": "Nevada",
                "ap": "Nev.",
                "x": 192,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "NY": {
                "full": "New York",
                "ap": "N.Y.",
                "x": 696,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "OH": {
                "full": "Ohio",
                "ap": "Ohio",
                "x": 552,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "OK": {
                "full": "Oklahoma",
                "ap": "Okla.",
                "x": 336,
                "y": 450,
                "w": 66,
                "h": 66
            },
            "OR": {
                "full": "Oregon",
                "ap": "Ore.",
                "x": 120,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "PA": {
                "full": "Pennsylvania",
                "ap": "Pa.",
                "x": 624,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "RI": {
                "full": "Rhode Island",
                "ap": "R.I.",
                "x": 840.8,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "SC": {
                "full": "South Carolina",
                "ap": "S.C.",
                "x": 624,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "SD": {
                "full": "South Dakota",
                "ap": "S.D.",
                "x": 336,
                "y": 234,
                "w": 66,
                "h": 66
            },
            "TN": {
                "full": "Tennessee",
                "ap": "Tenn.",
                "x": 480.5,
                "y": 378,
                "w": 66,
                "h": 66
            },
            "TX": {
                "full": "Texas",
                "ap": "Texas",
                "x": 336,
                "y": 522,
                "w": 66,
                "h": 66
            },
            "UT": {
                "full": "Utah",
                "ap": "Utah",
                "x": 192,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "VA": {
                "full": "Virginia",
                "ap": "Va.",
                "x": 624,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "VT": {
                "full": "Vermont",
                "ap": "Vt.",
                "x": 768,
                "y": 90,
                "w": 66,
                "h": 66
            },
            "WA": {
                "full": "Washington",
                "ap": "Wash.",
                "x": 120,
                "y": 162,
                "w": 66,
                "h": 66
            },
            "WI": {
                "full": "Wisconsin",
                "ap": "Wis.",
                "x": 480.5,
                "y": 90,
                "w": 66,
                "h": 66
            },
            "WV": {
                "full": "West Virginia",
                "ap": "W. Va.",
                "x": 552,
                "y": 306,
                "w": 66,
                "h": 66
            },
            "WY": {
                "full": "Wyoming",
                "ap": "Wyo.",
                "x": 264,
                "y": 234,
                "w": 66,
                "h": 66
            }
        },
        drawMap: function(selector) {
            var globalThis = this;
            if (!this.width) {
                this.width = d3.select(selector).attr('width');
            }
            if (!this.height) {
                this.height = d3.select(selector).attr('height');
            }
            var mapSvg = d3.select(selector)
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                .attr('viewBox', '0 0 960 611');

            var map = mapSvg.selectAll('rect')
                .data(d3.values(this.stateData))
                .enter()
                .append('rect')
                .attr('width', function(d) {
                    return d.w;
                })
                .attr('height', function(d) {
                    return d.h;
                })
                .attr('x', function(d) {
                    return d.x;
                })
                .attr('y', function(d) {
                    return d.y;
                });

            map.each(function(d) {
                var box = this.getBBox();
                mapSvg.append('text')
                    .text(d[globalThis.labelStyle])
                    .attr('x', box.x + (box.width/2))
                    .attr('y', box.y + (box.height/2))
                    .attr('class', 'state-label')
                    .attr('text-anchor', 'middle')
                    .attr('alignment-baseline', 'middle')
                    .style('fill', 'white')
                    .style('font-family', globalThis.labelTypeface);
            });
        },
        setColors: function(color) {
            this.colorSet = color;
            return this;
        },
        setColorNumber: function(number) {
            this.colorNumber = number;
            return this;
        },
        setWidth: function(width) {
            this.width = width;
            return this;
        },
        setHeight: function(height) {
            this.height = height;
            return this;
        }
    }
})();

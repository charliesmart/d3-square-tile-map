(function() {
    d3.squareMap = {
        width: null,
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
                "x": 0,
                "y": 72,
                "w": 66,
                "h": 66
            },
            "AL": {
                "abbr": "AL",
                "full": "Alabama",
                "ap": "Ala.",
                "x": 504,
                "y": 432,
                "w": 66,
                "h": 66
            },
            "AR": {
                "abbr": "AR",
                "full": "Arkansas",
                "ap": "Ark.",
                "x": 360,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "AZ": {
                "abbr": "AZ",
                "full": "Arizona",
                "ap": "Ariz.",
                "x": 144,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "CA": {
                "abbr": "CA",
                "full": "California",
                "ap": "Calif.",
                "x": 72,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "CO": {
                "abbr": "CO",
                "full": "Colorado",
                "ap": "Colo.",
                "x": 216,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "CT": {
                "abbr": "CT",
                "full": "Connecticut",
                "ap": "Conn.",
                "x": 720,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "DC": {
                "abbr": "DC",
                "full": "Washington, D.C.",
                "ap": "D.C.",
                "x": 648,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "DE": {
                "abbr": "DE",
                "full": "Delaware",
                "ap": "Del.",
                "x": 720,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "FL": {
                "abbr": "FL",
                "full": "Florida",
                "ap": "Fla.",
                "x": 648,
                "y": 504,
                "w": 66,
                "h": 66
            },
            "GA": {
                "abbr": "GA",
                "full": "Georgia",
                "ap": "Ga.",
                "x": 576,
                "y": 432,
                "w": 66,
                "h": 66
            },
            "HI": {
                "abbr": "HI",
                "full": "Hawaii",
                "ap": "Hawaii",
                "x": 72,
                "y": 504,
                "w": 66,
                "h": 66
            },
            "IA": {
                "full": "Iowa",
                "ap": "Iowa",
                "x": 360,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "ID": {
                "full": "Idaho",
                "ap": "Idaho",
                "x": 144,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "IL": {
                "full": "Illinois",
                "ap": "Ill.",
                "x": 432,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "IN": {
                "full": "Indiana",
                "ap": "Ind.",
                "x": 432,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "KS": {
                "full": "Kansas",
                "ap": "Kan.",
                "x": 288,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "KY": {
                "full": "Kentucky",
                "ap": "Ky.",
                "x": 432,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "LA": {
                "full": "Louisiana",
                "ap": "La.",
                "x": 360,
                "y": 432,
                "w": 66,
                "h": 66
            },
            "MA": {
                "full": "Massachusetts",
                "ap": "Mass.",
                "x": 720,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "MD": {
                "full": "Maryland",
                "ap": "Md.",
                "x": 648,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "ME": {
                "full": "Maine",
                "ap": "Maine",
                "x": 792.8,
                "y": 0,
                "w": 66,
                "h": 66
            },
            "MI": {
                "full": "Michigan",
                "ap": "Mich",
                "x": 504,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "MN": {
                "full": "Minnesota",
                "ap": "Minn.",
                "x": 360,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "MO": {
                "full": "Missouri",
                "ap": "Mo.",
                "x": 360,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "MS": {
                "full": "Mississippi",
                "ap": "Miss.",
                "x": 432,
                "y": 432,
                "w": 66,
                "h": 66
            },
            "MT": {
                "full": "Montana",
                "ap": "Mont.",
                "x": 216,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "NC": {
                "full": "North Carolina",
                "ap": "N.C.",
                "x": 504,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "ND": {
                "full": "North Dakota",
                "ap": "N.D.",
                "x": 288,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "NE": {
                "full": "Nebraska",
                "ap": "Neb.",
                "x": 288,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "NH": {
                "full": "New Hampshire",
                "ap": "N.H.",
                "x": 792.8,
                "y": 72,
                "w": 66,
                "h": 66
            },
            "NJ": {
                "full": "New Jersey",
                "ap": "N.J.",
                "x": 648,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "NM": {
                "full": "New Mexico",
                "ap": "N.M.",
                "x": 216,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "NV": {
                "full": "Nevada",
                "ap": "Nev.",
                "x": 144,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "NY": {
                "full": "New York",
                "ap": "N.Y.",
                "x": 648,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "OH": {
                "full": "Ohio",
                "ap": "Ohio",
                "x": 504,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "OK": {
                "full": "Oklahoma",
                "ap": "Okla.",
                "x": 288,
                "y": 432,
                "w": 66,
                "h": 66
            },
            "OR": {
                "full": "Oregon",
                "ap": "Ore.",
                "x": 72,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "PA": {
                "full": "Pennsylvania",
                "ap": "Pa.",
                "x": 576,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "RI": {
                "full": "Rhode Island",
                "ap": "R.I.",
                "x": 792.8,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "SC": {
                "full": "South Carolina",
                "ap": "S.C.",
                "x": 576,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "SD": {
                "full": "South Dakota",
                "ap": "S.D.",
                "x": 288,
                "y": 216,
                "w": 66,
                "h": 66
            },
            "TN": {
                "full": "Tennessee",
                "ap": "Tenn.",
                "x": 432,
                "y": 360,
                "w": 66,
                "h": 66
            },
            "TX": {
                "full": "Texas",
                "ap": "Texas",
                "x": 288,
                "y": 504,
                "w": 66,
                "h": 66
            },
            "UT": {
                "full": "Utah",
                "ap": "Utah",
                "x": 144,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "VA": {
                "full": "Virginia",
                "ap": "Va.",
                "x": 576,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "VT": {
                "full": "Vermont",
                "ap": "Vt.",
                "x": 720,
                "y": 72,
                "w": 66,
                "h": 66
            },
            "WA": {
                "full": "Washington",
                "ap": "Wash.",
                "x": 72,
                "y": 144,
                "w": 66,
                "h": 66
            },
            "WI": {
                "full": "Wisconsin",
                "ap": "Wis.",
                "x": 432,
                "y": 72,
                "w": 66,
                "h": 66
            },
            "WV": {
                "full": "West Virginia",
                "ap": "W. Va.",
                "x": 504,
                "y": 288,
                "w": 66,
                "h": 66
            },
            "WY": {
                "full": "Wyoming",
                "ap": "Wyo.",
                "x": 216,
                "y": 216,
                "w": 66,
                "h": 66
            }
        },
        render: function(selector) {
            if (!this.width) {
                this.width = d3.select(selector).node().getBoundingClientRect().width;
                this.height = this.width * 0.66371681415;
            }
            this.svg = d3.select(selector)
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                .attr('viewBox', '0 0 858.8 570');

            this.map = this.svg.selectAll('rect')
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
                if (this.labels) {
                    this.addLabels(this.svg);
                }
        },
        addLabels: function(svg) {
            var globalThis = this;
            this.map.each(function(d) {
                var box = this.getBBox();
                svg.append('text')
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
        setAttr: function(attr) {
            for (var key in attr) {
                if (key in this) {
                    this[key] = attr[key];
                } else {
                    throw new Error("Property '" + key + "' does not exist.");
                }
            }
            return this;
        }
    }
})();

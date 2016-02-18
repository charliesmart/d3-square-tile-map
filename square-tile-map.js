// Everything for our module is contained in a object as a property of d3
d3.squareMap = {
    // Default properties of the map
    width: null, // Width
    colorSet: 'Blues', // The ColorBrewer set to use
    colorNumber: 6, // The number of steps in the ColorBrewer scale
    labels: true, // Whether or not the map has labels
    labelTypeface: 'sans-serif', // Font of the labels
    labelStyle: 'ap', // Kind of labels (e.g. CT vs. Conn.)
    labelColor: 'white', // Color of labels
    data: [], // Will contain our data for later analysis
    scale: d3.scale.quantize(), // An empty d3 quantize scale to make our choropleth
    // This is the 'geographic' and label data for the states
    states: {
        "AK": { // Which state
            "abbr": "AK", // Postal abbreviation
            "full": "Alaska", // AP abbreviation
            "ap": "Alaska", // Full name
            "x": 0, // x coordinate of square
            "y": 72, // y coordinate of square
            "w": 66, // width
            "h": 66, // height
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
            "abbr": "IA",
            "full": "Iowa",
            "ap": "Iowa",
            "x": 360,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "ID": {
            "abbr": "ID",
            "full": "Idaho",
            "ap": "Idaho",
            "x": 144,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "IL": {
            "abbr": "IL",
            "full": "Illinois",
            "ap": "Ill.",
            "x": 432,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "IN": {
            "abbr": "IN",
            "full": "Indiana",
            "ap": "Ind.",
            "x": 432,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "KS": {
            "abbr": "KS",
            "full": "Kansas",
            "ap": "Kan.",
            "x": 288,
            "y": 360,
            "w": 66,
            "h": 66
        },
        "KY": {
            "abbr": "KY",
            "full": "Kentucky",
            "ap": "Ky.",
            "x": 432,
            "y": 288,
            "w": 66,
            "h": 66
        },
        "LA": {
            "abbr": "LA",
            "full": "Louisiana",
            "ap": "La.",
            "x": 360,
            "y": 432,
            "w": 66,
            "h": 66
        },
        "MA": {
            "abbr": "MA",
            "full": "Massachusetts",
            "ap": "Mass.",
            "x": 720,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "MD": {
            "abbr": "MD",
            "full": "Maryland",
            "ap": "Md.",
            "x": 648,
            "y": 288,
            "w": 66,
            "h": 66
        },
        "ME": {
            "abbr": "ME",
            "full": "Maine",
            "ap": "Maine",
            "x": 792.8,
            "y": 0,
            "w": 66,
            "h": 66
        },
        "MI": {
            "abbr": "MI",
            "full": "Michigan",
            "ap": "Mich",
            "x": 504,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "MN": {
            "abbr": "MN",
            "full": "Minnesota",
            "ap": "Minn.",
            "x": 360,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "MO": {
            "abbr": "MO",
            "full": "Missouri",
            "ap": "Mo.",
            "x": 360,
            "y": 288,
            "w": 66,
            "h": 66
        },
        "MS": {
            "abbr": "MS",
            "full": "Mississippi",
            "ap": "Miss.",
            "x": 432,
            "y": 432,
            "w": 66,
            "h": 66
        },
        "MT": {
            "abbr": "MT",
            "full": "Montana",
            "ap": "Mont.",
            "x": 216,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "NC": {
            "abbr": "NC",
            "full": "North Carolina",
            "ap": "N.C.",
            "x": 504,
            "y": 360,
            "w": 66,
            "h": 66
        },
        "ND": {
            "abbr": "ND",
            "full": "North Dakota",
            "ap": "N.D.",
            "x": 288,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "NE": {
            "abbr": "NE",
            "full": "Nebraska",
            "ap": "Neb.",
            "x": 288,
            "y": 288,
            "w": 66,
            "h": 66
        },
        "NH": {
            "abbr": "NH",
            "full": "New Hampshire",
            "ap": "N.H.",
            "x": 792.8,
            "y": 72,
            "w": 66,
            "h": 66
        },
        "NJ": {
            "abbr": "NJ",
            "full": "New Jersey",
            "ap": "N.J.",
            "x": 648,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "NM": {
            "abbr": "NM",
            "full": "New Mexico",
            "ap": "N.M.",
            "x": 216,
            "y": 360,
            "w": 66,
            "h": 66
        },
        "NV": {
            "abbr": "NV",
            "full": "Nevada",
            "ap": "Nev.",
            "x": 144,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "NY": {
            "abbr": "NY",
            "full": "New York",
            "ap": "N.Y.",
            "x": 648,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "OH": {
            "abbr": "OH",
            "full": "Ohio",
            "ap": "Ohio",
            "x": 504,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "OK": {
            "abbr": "OK",
            "full": "Oklahoma",
            "ap": "Okla.",
            "x": 288,
            "y": 432,
            "w": 66,
            "h": 66
        },
        "OR": {
            "abbr": "OR",
            "full": "Oregon",
            "ap": "Ore.",
            "x": 72,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "PA": {
            "abbr": "PA",
            "full": "Pennsylvania",
            "ap": "Pa.",
            "x": 576,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "RI": {
            "abbr": "RI",
            "full": "Rhode Island",
            "ap": "R.I.",
            "x": 792.8,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "SC": {
            "abbr": "SC",
            "full": "South Carolina",
            "ap": "S.C.",
            "x": 576,
            "y": 360,
            "w": 66,
            "h": 66
        },
        "SD": {
            "abbr": "SD",
            "full": "South Dakota",
            "ap": "S.D.",
            "x": 288,
            "y": 216,
            "w": 66,
            "h": 66
        },
        "TN": {
            "abbr": "TN",
            "full": "Tennessee",
            "ap": "Tenn.",
            "x": 432,
            "y": 360,
            "w": 66,
            "h": 66
        },
        "TX": {
            "abbr": "TX",
            "full": "Texas",
            "ap": "Texas",
            "x": 288,
            "y": 504,
            "w": 66,
            "h": 66
        },
        "UT": {
            "abbr": "UT",
            "full": "Utah",
            "ap": "Utah",
            "x": 144,
            "y": 288,
            "w": 66,
            "h": 66
        },
        "VA": {
            "abbr": "VA",
            "full": "Virginia",
            "ap": "Va.",
            "x": 576,
            "y": 288,
            "w": 66,
            "h": 66
        },
        "VT": {
            "abbr": "VT",
            "full": "Vermont",
            "ap": "Vt.",
            "x": 720,
            "y": 72,
            "w": 66,
            "h": 66
        },
        "WA": {
            "abbr": "WA",
            "full": "Washington",
            "ap": "Wash.",
            "x": 72,
            "y": 144,
            "w": 66,
            "h": 66
        },
        "WI": {
            "abbr": "WI",
            "full": "Wisconsin",
            "ap": "Wis.",
            "x": 432,
            "y": 72,
            "w": 66,
            "h": 66
        },
        "WV": {
            "abbr": "WV",
            "full": "West Virginia",
            "ap": "W. Va.",
            "x": 504,
            "y": 288,
            "w": 66,
            "h": 66
        },
        "WY": {
            "abbr": "WY",
            "full": "Wyoming",
            "ap": "Wyo.",
            "x": 216,
            "y": 216,
            "w": 66,
            "h": 66
        }
    },
    // Called by the user to render the map
    render: function(data, selector) { // Takes the location of the data CSV and the container element
        // Parse the data
        d3.csv(data, function(d) {
            // Loop through states data (this.states)
            for (var key in d3.squareMap.states) {
                // Loop through the user data (d)
                for (var j = 0; j < d.length; j++) {
                    // Check if the current selection in the states object matches the current selection in the data object
                    if (key == d[j].state) {
                        // If it does, set that state's stateData property to the data
                        // The data from here will be used in tooltips and such
                        d3.squareMap.states[key].stateData = d[j].data;
                        // Also add the data to the data array. This will be used to calculate min and max for the scale
                        d3.squareMap.data.push(+d[j].data);
                    }
                }
            }

            // Once the data is done parsing, actually draw the map
            d3.squareMap.draw(selector);
        });
    },
    draw: function(selector) {

        // Update the domain and range of the scale based on the user's data
        this.updateScaleRange();
        this.updateScaleDomain();

        // Check if the user has set a custom width
        if (!this.width) {
            // If not, set the width based on the width of the containing element
            this.width = d3.select(selector).node().getBoundingClientRect().width;
            this.height = this.width * 0.66371681415;
        } else {
            this.height = this.width * 0.66371681415;
        }

        // Append an SVG to the container element, based on the user's set properties
        this.svg = d3.select(selector)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('viewBox', '0 0 858.8 570'); // Needed to make the map scale to the SVG size

        // Append the SVG rect for each state to the SVG canvas
        this.map = this.svg.selectAll('rect')
            .data(d3.values(this.states)) // Bind the user's data
            .enter()
            .append('rect') // Create the rect
            .attr('width', function(d) {
                return d.w; // Set width dynamically
            })
            .attr('height', function(d) {
                return d.h; // Set height dynamically
            })
            .attr('x', function(d) {
                return d.x; // Set x dynamically
            })
            .attr('y', function(d) {
                return d.y; // Set y dynamically
            }).attr('fill', function(d) {
                return d3.squareMap.scale(d.stateData); // Set the colors of each state using our data and scale
            });

            // If the user wants labels, generate them
            if (this.labels) {
                this.addLabels(this.svg); // Call addLabels() on the SVG
            }
    },
    // Generate the state labels
    addLabels: function(svg) {

        // For each state on the map, make a label
        this.map.each(function(d) {

            // Get the bounding box (l,w,x,y) of the state
            var box = this.getBBox();

            // Append a text element to the SVG
            svg.append('text')
                .text(d[d3.squareMap.labelStyle]) // Set the text based on the state and the user's style choice
                .attr('x', box.x + (box.width/2)) // Set the x position based on the bounding box
                .attr('y', box.y + (box.height/2)) // Set the y position based on the bounding box
                .attr('class', 'state-label') // Label the state
                .attr('text-anchor', 'middle') // Center the text horizontally
                .attr('alignment-baseline', 'middle') // Center the text vertically
                .style('fill', d3.squareMap.labelColor) // Color the labels
                .style('font-family', d3.squareMap.labelTypeface); // Set the label font
        });
    },
    // Setter method to allow the user to set properties. Takes an object of properties as its argument.
    setAttr: function(attr) {

        // For each key in the attr object...
        for (var key in attr) {
            // If that key is also a key in this
            if (key in this) {
                // Set the value of the this key to the value of the attr key
                this[key] = attr[key];
            } else {
                // Otherwise, throw an error
                throw new Error("Property '" + key + "' does not exist.");
            }
        }

        // Return this so the functions can be chained
        return this;
    },
    // Method to update the scale range
    updateScaleRange: function() {
        // Get the colorset and number
        var palette = this.colorSet,
            number = this.colorNumber;
        // Set the range
        this.scale.range(colorbrewer[palette][number]);
    },
    // Method to update the scale domain
    updateScaleDomain: function() {
        // Get the min and max form the user's data
        var min = d3.min(this.data);
        var max = d3.max(this.data);
        // Set the scale domain
        this.scale.domain([min, max]);
    }, onClick: function(userFunction) {
        this.map.onclick = userFunction;
    },
}

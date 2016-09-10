<body>
    <div class="container">
      <div>
        <h1>API Basejump: Timestamp microservice</h1>
        <blockquote>
          "User stories:"
          <ul>
            <li>
              1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
            </li>
            <li>
              2) If it does, it returns both the Unix timestamp and the natural language form of that date.
            </li>
            <li>
              3) If it does not contain a date or Unix timestamp, it returns null for those properties.
            </li>
          </ul>
        </blockquote>
        <h3>Example usage:</h3>
        <p class="examples">https://wanjongkim-timestamp.herokuapp.com/json%20natural?date=December%2015,%202015<br/>
https://wanjongkim-timestamp.herokuapp.com/json%20unix?date=1450137600</p>
        <h3>Example output:</h3>
        <p class="examples">{ "unix": 1450137600, "natural": "December 15, 2015" }</p>
      </div>
    </div>
</body>

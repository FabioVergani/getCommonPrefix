# Returns the common prefix of two strings.

- Arguments: `""`, `null`
- Arguments: `""`, `""`

Output: `""`

* Arguments: `" "`, `" "`
* Arguments: `" "`, `" "`
* Arguments: `" \t"`, `" \t"`
* Arguments: `" abcdef"`, `" abcdef "`

Output: `" "`

* Arguments: `"\t"`, `"\t"`

Output: `"\t"`

* Arguments: `"a"`, `"a"`
* Arguments: `"a"`, `"aa"`
* Arguments: `"aa"`, `"a"`
* Arguments: `"aaa"`, `"aa"`
* Arguments: `"aa"`, `"aaa"`
* Arguments: `"abcd"`, `"ab"`
  
Output: `"a"`

* Arguments: `"abc"`, `"abc"`
  
Output: `"abc"`

* Arguments: `"abcdef"`, `"abcdeg"`
  
Output: `"abcde"`

* Arguments: `"abcdefgh"`, `"abefgh"`
  
Output: `"ab"`

* Arguments: `"𝐻𝑒𝓁𝓁𝑜"`, `"𝐻𝑒𝓁𝓁𝓄"`
  
Output: `"𝐻𝑒𝓁𝓁"`

* Arguments: `"💻💬📱"`, `"💻💬💾"`

Output: `"💻💬"`

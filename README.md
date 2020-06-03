# Caesar_Cipher_JavaScript_node
Caesar Cipher challenge - using JavaScript node - get a JSON file on a Codenation site, solve the Caesar Cipher, put in Secure Hash Algorithm 1 and return JSON to server.
Cryptography of Julius Caesar

Rules
The messages will be converted to lowercase for both encryption and decryption.
In our case the numbers and points will be maintained, that is:
Normal: 1a.a

Encrypted: 1d.d

Write a program, in any programming language, that makes an HTTP request to a URL below:

https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN
To find your token, access the Codenation platform, login and get information available on the screen.

The result of the request will be a JSON according to the example:

{
"house_number": 10,
"token": "user_token",
"encrypted": "encrypted text",
"deciphered": "here's the deciphered text",
"summary_criptografico": "here's the summary"
}
The first step is to save the JSON content in a file named answer.json, which you will use for the rest of the challenge.

You must use the number of places to decipher the text and update the JSON file, in the deciphered field. The next step is to generate an encrypted summary of the decrypted text using the sha1 algorithm and update the JSON file again. NOTE: You can use any cryptography library in your favorite programming language to generate the sha1 summary of the deciphered text.

Your program must submit or update the file for correction via POST to an API:

https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN
NOTE: the API expects a file to be sent as multi-part data / form, as sent by HTML form, with a file type field with the name response. Consider this when uploading the file.

The result of the submission will be your note or corresponding error. You can send as many times as necessary, but the API will no longer allow one submission per minute.

OBS
At this stage of the acceleration do not ask you to send us the code of the program you created, but we recommend that you guarantee a copy as it can be requested in the next stages of the process.

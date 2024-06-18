"use client";
import { MdContentCopy } from "react-icons/md";
import { IoTerminalOutline, IoLogoJavascript } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import { SiPhp, SiSwift } from "react-icons/si";
import { DiRuby, DiDart } from "react-icons/di";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MdDone } from "react-icons/md";

const Terminal: React.FC = () => {
  const [Lang, SetLang] = useState<string>("Curl");
  const [copy, SetDone] = useState<boolean>(true);
  const curl = `#curl code
curl -X 'POST' \\
'https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue' \\
-H 'accept: application/json' \\
-H 'Content-Type: application/json' \\
-d '{
    "campaign": "Campaign name",
    "language": "Language like hindi or english",
    "name": "Call receiver name",
    "phoneNumber": "Call receiver phone number"
}'`;

  const python = `#Python code
import requests

headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
}

params = {
    'apiKey': 'apiKeyStringValue',
}

json_data = {
    'campaign': 'Campaign name',
    'language': 'Language like hindi or english',
    'name': 'Call receiver name',
    'phoneNumber': 'Call receiver phone number',
}

response = requests.post('https://call.toingg.com/api/make_toingg/',
                          params=params, headers=headers, json=json_data)`;

  const ruby = `#ruby code
require 'net/http'
require 'json'

uri = URI('https://call.toingg.com/api/make_toingg/')
params = {
  :apiKey => 'apiKeyStringValue',
}
uri.query = URI.encode_www_form(params)

req = Net::HTTP::Post.new(uri)
req.content_type = 'application/json'
req['accept'] = 'application/json'

req.body = {
  'campaign': 'Campaign name',
  'language': 'Language like hindi or english',
  'name': 'Call receiver name',
  'phoneNumber': 'Call receiver phone number'
}.to_json

req_options = {
  use_ssl: uri.scheme == 'https'
}
res = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(req)
end`;

  const swift = `//Swift code
import Foundation

let jsonData = [
    "campaign": "Campaign name",
    "language": "Language like hindi or english",
    "name": "Call receiver name",
    "phoneNumber": "Call receiver phone number"
] as [String : Any]
let data = try! JSONSerialization.data(withJSONObject: jsonData, options: [])
let url = URL(string: "https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue")!
let headers = [
    "accept": "application/json",
    "Content-Type": "application/json"
]

var request = URLRequest(url: url)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = data as Data

let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
    if let error = error {
        print(error)
    } else if let data = data {
        let str = String(data: data, encoding: .utf8)
        print(str ?? "")
    }
}

task.resume()`;

  const dart = `//Dart code 
import 'package:http/http.dart' as http;

void main() async {
  var headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  var params = {
    'apiKey': 'apiKeyStringValue',
  };
  var query = params.entries.map((p) => '{p.key}={p.value}').join('&');

  var data = '{
  "campaign": "Campaign name",
  "language": "Language like hindi or english",
  "name": "Call receiver name",
  "phoneNumber": "Call receiver phone number"
}';

  var url = Uri.parse('https://call.toingg.com/api/make_toingg/?$query');
  var res = await http.post(url, headers: headers, body: data);
  if (res.statusCode != 200) throw Exception('http.post error: statusCode= {res.statusCode}');
  print(res.body);
}
`;

  const JavaScript = `//JavaScript code
fetch('https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue', {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'campaign': 'Campaign name',
    'language': 'Language like hindi or english',
    'name': 'Call receiver name',
    'phoneNumber': 'Call receiver phone number'
  })
});
`;
  const php = `//PHP code
<php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'accept: application/json',
    'Content-Type: 'application/json',
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\n  \"campaign\": \"Campaign name\",\n  \"language\": \"Language like hindi or english\",\n  \"name\": \"Call receiver name\",\n  \"phoneNumber\": \"Call receiver phone number\"\n}");

$response = curl_exec($ch);

curl_close($ch);`;

  const handlecopy = (code: any) => {
    SetDone(false)
    navigator.clipboard.writeText(code);
    setTimeout(()=>{SetDone(true)},3000)
  };

  const [ShowCode, SetCode] = useState<string>(curl);
  return (
    <div className="main_terminal_container w-[100%] h-[100vh] flex justify-center items-center">
      <div className="main_code_display_area w-[80%] h-[90vh] bg-[#FFF6E8] rounded-2xl p-4 flex flex-col">
        <div className="header w-[100%] h-fit flex items-center justify-between bg-[#373535] text-white rounded-t-lg p-2">
          <p>{Lang}</p>
          <p
            className="flex items-center cursor-pointer"
            onClick={() => {
              handlecopy(ShowCode);
            }}
          >
            {copy ? <MdContentCopy /> : <MdDone />}
            copy code
          </p>
        </div>
        <div className="code_content w-[100%] h-[400px] bg-black text-white p-4 rounded-b-lg overflow-y-auto">
          <SyntaxHighlighter language="bash" style={tomorrow}>
            {ShowCode}
          </SyntaxHighlighter>
        </div>
        <div className="language_icons_display w-[100%] h-[200px] bg-[#b1a99d] rounded-b-lg flex flex-wrap justify-evenly pt-3">
          <div
            className="curl w-fit h-fit p-2 shadow-xl bg-[#d5d1c9] rounded-md py-5 hover:bg-orange-500 cursor-pointer"
            onClick={() => {
              SetLang("Curl");
              SetCode(curl);
            }}
          >
            <h1 className="text-xl">Curl://</h1>
          </div>
          <div
            className="python w-fit h-fit p-2 shadow-xl bg-[#d5d1c9] rounded-md hover:bg-orange-500 cursor-pointer"
            onClick={() => {
              SetLang("Python");
              SetCode(python);
            }}
          >
            <AiOutlinePython size={50} />
          </div>
          <div
            className="js w-fit h-fit p-2 shadow-xl bg-[#d5d1c9] rounded-md hover:bg-orange-500 cursor-pointer"
            onClick={() => {
              SetLang("JavaScript");
              SetCode(JavaScript);
            }}
          >
            <IoLogoJavascript size={50} />
          </div>
          <div
            className="php w-fit h-fit p-2 shadow-xl bg-[#d5d1c9] rounded-md hover:bg-orange-500 cursor-pointer"
            onClick={() => {
              SetLang("PhP");
              SetCode(php);
            }}
          >
            <SiPhp size={50} />
          </div>
          <div
            className="dart w-fit h-fit p-2 shadow-xl bg-[#d5d1c9] rounded-md hover:bg-orange-500 cursor-pointer"
            onClick={() => {
              SetLang("Dart");
              SetCode(dart);
            }}
          >
            <DiDart size={50} />
          </div>
          <div
            className="swift w-fit h-fit p-2 shadow-xl bg-[#d5d1c9] rounded-md hover:bg-orange-500 cursor-pointer"
            onClick={() => {
              SetLang("Swift");
              SetCode(swift);
            }}
          >
            <SiSwift size={50} />
          </div>
          <div
            className="ruby w-fit h-fit p-2 shadow-xl bg-[#d5d1c9] rounded-md hover:bg-orange-500 cursor-pointer"
            onClick={() => {
              SetLang("Ruby");
              SetCode(ruby);
            }}
          >
            <DiRuby size={50} />
          </div>
        </div>
        <div className="text_area_display_content">
          <h1 className="mt-6 text-center text-xl font-bold">
            Build your own voice agent
          </h1>
          <p className="text-center mt-3 font-bold text-[#6B6B6B]">
            in just a few lines of code
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

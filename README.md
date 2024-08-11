# generateMockVisitData
generateMockVisitData的函数，其主要职责是生成一组模拟的用户访问记录数据。以下是该函数的具体实现步骤：
1. 
设备信息模拟：从预设的操作系统列表（包括Windows、MacOS、Linux、iOS、Android）中随机选择一项作为用户的设备信息。
2. 
访问时间记录：利用new Date().toLocaleString()获取当前的日期和时间，以此代表用户的访问时间。
3. 
MAC地址生成：通过生成一系列随机的十六进制数字并以冒号分隔，模拟生成一个MAC地址。
4. 
IP地址生成：生成一个随机的IPv4地址，每个部分的数字范围在0至255之间。
5. 
请求类型选择：从常见的HTTP请求类型（GET、POST、PUT、DELETE）中随机选取一项，代表用户的请求方式。
6. 
宽带账号构造：创建一个随机的字符串来模拟宽带账号。

generateMockVisitData, whose primary responsibility is to generate a set of simulated user access record data. Here are the steps to implement the function:
1. 
Device Information Emulation: Randomly select one item from a preset list of operating systems (including Windows, MacOS, Linux, iOS, Android) as the user's device information.
2. 
Access time record: Use new Date().toLocaleString() to obtain the current date and time, which represents the user's access time.
3. 
MAC address generation: Simulates the generation of a MAC address by generating a series of random hexadecimal digits separated by colons.
4. 
IP Address Generation: Generate a random IPv4 address with a numeric range between 0 and 255 for each part.
5. 
Request Type Selection: Select one of the common HTTP request types (GET, POST, PUT, DELETE) to represent the user's request mode.
6. 
Broadband account construction: Create a random string to simulate a broadband account.

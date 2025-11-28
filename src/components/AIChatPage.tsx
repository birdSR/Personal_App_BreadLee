import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '안녕하세요! 브레드리 AI입니다. 🍞\n빵에 관한 어떤 것이든 물어보세요!',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');

    // Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: 'AI 챗봇 기능은 추후 연동될 예정입니다. 현재는 프로토타입 버전입니다.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="bg-white relative w-full h-screen flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center justify-center border-b border-[#e0e0e0]">
        <h1 className="font-['YES_Gothic:Bold',sans-serif] text-[18px] text-[#242121]">AI 챗봇</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[20px] pb-[132px]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-[16px] flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-[14px] px-[16px] py-[12px] ${
                message.sender === 'user'
                  ? 'bg-[#5277ff] text-white'
                  : 'bg-[#f5f5f5] text-[#242121]'
              }`}
            >
              <p className="font-['YES_Gothic:Regular',sans-serif] text-[14px] whitespace-pre-wrap">
                {message.text}
              </p>
              <p
                className={`font-['YES_Gothic:Regular',sans-serif] text-[10px] mt-[4px] ${
                  message.sender === 'user' ? 'text-white/70' : 'text-[#7f7777]'
                }`}
              >
                {message.timestamp.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="absolute bottom-[112px] left-0 right-0 bg-white border-t border-[#e0e0e0] px-[20px] py-[16px]">
        <div className="flex gap-[12px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
            placeholder="빵에 대해 무엇이든 물어보세요..."
            className="flex-1 bg-[#f5f5f5] rounded-[20px] px-[16px] py-[12px] font-['YES_Gothic:Regular',sans-serif] text-[14px] outline-none focus:ring-2 focus:ring-[#5277ff]"
          />
          <button
            onClick={handleSend}
            className="bg-[#5277ff] text-white rounded-[20px] px-[20px] font-['YES_Gothic:Bold',sans-serif] text-[14px]"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

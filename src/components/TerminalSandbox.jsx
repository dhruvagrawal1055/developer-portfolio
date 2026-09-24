import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Trash2, 
  CornerDownLeft 
} from 'lucide-react';
import { terminalCommands, personalInfo } from '../data/portfolioData';

export default function TerminalSandbox() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Dhruv Agrawal — Interactive CLI Console. Type "help" to list available commands.' },
    { type: 'command', text: 'summary' },
    { type: 'output', text: terminalCommands.summary }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandList, setCommandList] = useState(['summary']);
  const terminalContainerRef = useRef(null);
  const inputRef = useRef(null);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setCommandList(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'command', text: trimmed }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (terminalCommands[trimmed]) {
      newHistory.push({ type: 'output', text: terminalCommands[trimmed] });
    } else {
      newHistory.push({ 
        type: 'error', 
        text: `Command not recognized: "${trimmed}". Type "help" to see available commands.` 
      });
    }

    setHistory(newHistory);
    setInputVal('');

    setTimeout(() => {
      if (terminalContainerRef.current) {
        terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandList.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandList[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = ['summary', 'experience', 'libraries', 'backend', 'skills', 'education', 'contact', 'resume', 'clear', 'help'];
      const match = available.find(c => c.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  return (
    <section className="py-16 bg-[#080b11] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="rounded-xl border border-white/[0.08] bg-[#0c101a] shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0f1422] border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              <span className="text-xs font-mono text-slate-400 ml-1.5 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                dhruv@interactive-shell: ~$
              </span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="p-1 rounded text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1"
              title="Clear terminal screen"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          {/* Screen */}
          <div 
            ref={terminalContainerRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 font-mono text-xs text-slate-200 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3 cursor-text bg-black/50"
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.type === 'system' && (
                  <div className="text-slate-400 text-xs pb-1 border-b border-white/[0.06]">
                    {item.text}
                  </div>
                )}
                {item.type === 'command' && (
                  <div className="flex items-center gap-2 text-sky-400">
                    <span className="text-emerald-400 font-semibold">dhruv:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed bg-slate-950/60 p-2.5 rounded border border-white/[0.04]">
                    {item.text}
                  </pre>
                )}
                {item.type === 'error' && (
                  <div className="text-rose-400 bg-rose-950/20 p-2 rounded border border-rose-800/30">
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {/* Input prompt */}
            <div className="flex items-center gap-2 pt-1 text-sky-400">
              <span className="text-emerald-400 font-semibold">dhruv:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or 'libraries'..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs focus:ring-0 p-0"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>

          {/* Shortcuts Footer */}
          <div className="px-4 py-2 bg-[#0f1422] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div>
              <span>[Tab] Autocomplete</span>
              <span className="mx-2">•</span>
              <span>[↑/↓] History</span>
            </div>
            <div className="text-slate-500">
              Type <span className="text-sky-400">help</span> for command list
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

'use client'

import { useState } from 'react'

interface Token { t: string; v: string }
interface Line  { indent: number; tokens: Token[] }

const tabs = [
  {
    id: 'workflow',
    label: 'createWorkflow',
    filename: 'research.workflow.ts',
    desc: 'A durable workflow that survives crashes. Every step is checkpointed — resuming from the exact failure point.',
    lines: [
      { indent: 0, tokens: [{ t: 'keyword', v: 'import' }, { t: 'punct', v: ' { ' }, { t: 'fn', v: 'createWorkflow' }, { t: 'punct', v: ', ' }, { t: 'fn', v: 'createStep' }, { t: 'punct', v: ' } ' }, { t: 'keyword', v: 'from' }, { t: 'string', v: " '@runflo/core'" }] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'import' }, { t: 'punct', v: ' { ' }, { t: 'fn', v: 'useAgent' }, { t: 'punct', v: ' } ' }, { t: 'keyword', v: 'from' }, { t: 'string', v: " '@runflo/agents'" }] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'import' }, { t: 'punct', v: ' { ' }, { t: 'fn', v: 'useMemory' }, { t: 'punct', v: ' } ' }, { t: 'keyword', v: 'from' }, { t: 'string', v: " '@runflo/memory'" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ t: 'comment', v: '// Each step is retried independently on failure' }] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' fetchSource' }, { t: 'punct', v: ' = ' }, { t: 'fn', v: 'createStep' }, { t: 'punct', v: '<{ url: ' }, { t: 'type', v: 'string' }, { t: 'punct', v: ' }>({' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'name' }, { t: 'punct', v: ': ' }, { t: 'string', v: "'fetch-source'" }, { t: 'punct', v: ',' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'retry' }, { t: 'punct', v: ': { maxAttempts: ' }, { t: 'num', v: '3' }, { t: 'punct', v: ', backoff: ' }, { t: 'string', v: "'exponential'" }, { t: 'punct', v: ' },' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'run' }, { t: 'punct', v: ': ' }, { t: 'keyword', v: 'async' }, { t: 'punct', v: ' ({ url }) => {' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' content' }, { t: 'punct', v: ' = ' }, { t: 'keyword', v: 'await' }, { t: 'fn', v: ' fetch' }, { t: 'punct', v: '(url).' }, { t: 'fn', v: 'then' }, { t: 'punct', v: '(r => r.' }, { t: 'fn', v: 'text' }, { t: 'punct', v: '())' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'return' }, { t: 'punct', v: ' { content }' }] },
      { indent: 1, tokens: [{ t: 'punct', v: '}' }] },
      { indent: 0, tokens: [{ t: 'punct', v: '})' }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' summarise' }, { t: 'punct', v: ' = ' }, { t: 'fn', v: 'createStep' }, { t: 'punct', v: '<{ content: ' }, { t: 'type', v: 'string' }, { t: 'punct', v: ' }>({' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'name' }, { t: 'punct', v: ': ' }, { t: 'string', v: "'summarise'" }, { t: 'punct', v: ',' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'run' }, { t: 'punct', v: ': ' }, { t: 'keyword', v: 'async' }, { t: 'punct', v: ' ({ content }) => {' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' agent' }, { t: 'punct', v: ' = ' }, { t: 'fn', v: 'useAgent' }, { t: 'punct', v: '({ model: ' }, { t: 'string', v: "'claude-opus-4-7'" }, { t: 'punct', v: ' })' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'const' }, { t: 'punct', v: ' { ' }, { t: 'const', v: 'output' }, { t: 'punct', v: ' } = ' }, { t: 'keyword', v: 'await' }, { t: 'const', v: ' agent' }, { t: 'punct', v: '.' }, { t: 'fn', v: 'invoke' }, { t: 'punct', v: '(`Summarise: ${content}`)' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'return' }, { t: 'punct', v: ' { summary: output }' }] },
      { indent: 1, tokens: [{ t: 'punct', v: '}' }] },
      { indent: 0, tokens: [{ t: 'punct', v: '})' }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ t: 'comment', v: '// Workflow = ordered list of durable steps' }] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'export const' }, { t: 'const', v: ' researchWorkflow' }, { t: 'punct', v: ' = ' }, { t: 'fn', v: 'createWorkflow' }, { t: 'punct', v: '({' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'name' }, { t: 'punct', v: ': ' }, { t: 'string', v: "'research'" }, { t: 'punct', v: ',' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'steps' }, { t: 'punct', v: ': [' }, { t: 'const', v: 'fetchSource' }, { t: 'punct', v: ', ' }, { t: 'const', v: 'summarise' }, { t: 'punct', v: ', ' }, { t: 'const', v: 'saveToMemory' }, { t: 'punct', v: '],' }] },
      { indent: 0, tokens: [{ t: 'punct', v: '})' }] },
    ] as Line[],
  },
  {
    id: 'memory',
    label: '@runflo/memory',
    filename: 'memory.step.ts',
    desc: 'Persistent memory that works across sessions. Agents remember facts and recall relevant context automatically.',
    lines: [
      { indent: 0, tokens: [{ t: 'keyword', v: 'import' }, { t: 'punct', v: ' { ' }, { t: 'fn', v: 'createStep' }, { t: 'punct', v: ' } ' }, { t: 'keyword', v: 'from' }, { t: 'string', v: " '@runflo/core'" }] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'import' }, { t: 'punct', v: ' { ' }, { t: 'fn', v: 'useMemory' }, { t: 'punct', v: ' } ' }, { t: 'keyword', v: 'from' }, { t: 'string', v: " '@runflo/memory'" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'export const' }, { t: 'const', v: ' saveToMemory' }, { t: 'punct', v: ' = ' }, { t: 'fn', v: 'createStep' }, { t: 'punct', v: '<{ userId: ' }, { t: 'type', v: 'string' }, { t: 'punct', v: '; summary: ' }, { t: 'type', v: 'string' }, { t: 'punct', v: ' }>({' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'name' }, { t: 'punct', v: ': ' }, { t: 'string', v: "'save-to-memory'" }, { t: 'punct', v: ',' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'run' }, { t: 'punct', v: ': ' }, { t: 'keyword', v: 'async' }, { t: 'punct', v: ' ({ userId, summary }) => {' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' memory' }, { t: 'punct', v: ' = ' }, { t: 'fn', v: 'useMemory' }, { t: 'punct', v: '(' }, { t: 'string', v: "'research'" }, { t: 'punct', v: ', userId)' }] },
      { indent: 0, tokens: [] },
      { indent: 2, tokens: [{ t: 'comment', v: '// Persist a fact across all future sessions' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'await' }, { t: 'const', v: ' memory' }, { t: 'punct', v: '.' }, { t: 'fn', v: 'set' }, { t: 'punct', v: '(' }, { t: 'string', v: "'lastSummary'" }, { t: 'punct', v: ', summary)' }] },
      { indent: 0, tokens: [] },
      { indent: 2, tokens: [{ t: 'comment', v: '// Add to episodic log (searchable)' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'await' }, { t: 'const', v: ' memory' }, { t: 'punct', v: '.' }, { t: 'fn', v: 'remember' }, { t: 'punct', v: '(`Research completed: ${summary}`)' }] },
      { indent: 0, tokens: [] },
      { indent: 2, tokens: [{ t: 'comment', v: '// Later: recall relevant episodes by keyword' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' past' }, { t: 'punct', v: ' = ' }, { t: 'keyword', v: 'await' }, { t: 'const', v: ' memory' }, { t: 'punct', v: '.' }, { t: 'fn', v: 'recall' }, { t: 'punct', v: '(' }, { t: 'string', v: "'AI agents'" }, { t: 'punct', v: ', ' }, { t: 'num', v: '5' }, { t: 'punct', v: ')' }] },
      { indent: 2, tokens: [{ t: 'keyword', v: 'return' }, { t: 'punct', v: ' { saved: ' }, { t: 'keyword', v: 'true' }, { t: 'punct', v: ', relatedEpisodes: past.' }, { t: 'prop', v: 'length' }, { t: 'punct', v: ' }' }] },
      { indent: 1, tokens: [{ t: 'punct', v: '}' }] },
      { indent: 0, tokens: [{ t: 'punct', v: '})' }] },
    ] as Line[],
  },
  {
    id: 'client',
    label: 'runfloClient',
    filename: 'api.ts',
    desc: 'Trigger workflows from anywhere — API handlers, cron jobs, webhooks, or CLI scripts.',
    lines: [
      { indent: 0, tokens: [{ t: 'keyword', v: 'import' }, { t: 'punct', v: ' { ' }, { t: 'type', v: 'runfloClient' }, { t: 'punct', v: ', ' }, { t: 'fn', v: 'defineConfig' }, { t: 'punct', v: ' } ' }, { t: 'keyword', v: 'from' }, { t: 'string', v: " '@runflo/core'" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ t: 'comment', v: '// runflo.config.ts — single place for all config' }] },
      { indent: 0, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' config' }, { t: 'punct', v: ' = ' }, { t: 'fn', v: 'defineConfig' }, { t: 'punct', v: '({' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'mode' }, { t: 'punct', v: ': ' }, { t: 'string', v: "'cloud'" }, { t: 'punct', v: ',' }, { t: 'comment', v: ' // docker | cloud | self-hosted | memory' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'namespace' }, { t: 'punct', v: ': ' }, { t: 'const', v: 'process' }, { t: 'punct', v: '.env.' }, { t: 'prop', v: 'RUNFLO_NAMESPACE' }, { t: 'punct', v: '!,' }] },
      { indent: 1, tokens: [{ t: 'prop', v: 'queue' }, { t: 'punct', v: ': ' }, { t: 'string', v: "'default'" }, { t: 'punct', v: ',' }] },
      { indent: 0, tokens: [{ t: 'punct', v: '})' }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ t: 'comment', v: '// Express route — trigger a workflow from an HTTP request' }] },
      { indent: 0, tokens: [{ t: 'const', v: 'app' }, { t: 'punct', v: '.' }, { t: 'fn', v: 'post' }, { t: 'punct', v: '(' }, { t: 'string', v: "'/research'" }, { t: 'punct', v: ', ' }, { t: 'keyword', v: 'async' }, { t: 'punct', v: ' (req, res) => {' }] },
      { indent: 1, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' client' }, { t: 'punct', v: ' = ' }, { t: 'keyword', v: 'new' }, { t: 'type', v: ' runfloClient' }, { t: 'punct', v: '(config)' }] },
      { indent: 0, tokens: [] },
      { indent: 1, tokens: [{ t: 'comment', v: '// Fire-and-forget: returns the run ID immediately' }] },
      { indent: 1, tokens: [{ t: 'keyword', v: 'const' }, { t: 'const', v: ' run' }, { t: 'punct', v: ' = ' }, { t: 'keyword', v: 'await' }, { t: 'const', v: ' client' }, { t: 'punct', v: '.' }, { t: 'fn', v: 'trigger' }, { t: 'punct', v: '(' }, { t: 'string', v: "'research'" }, { t: 'punct', v: ', {' }] },
      { indent: 2, tokens: [{ t: 'prop', v: 'url' }, { t: 'punct', v: ': req.body.' }, { t: 'prop', v: 'url' }, { t: 'punct', v: ',' }] },
      { indent: 2, tokens: [{ t: 'prop', v: 'userId' }, { t: 'punct', v: ': req.body.' }, { t: 'prop', v: 'userId' }, { t: 'punct', v: ',' }] },
      { indent: 1, tokens: [{ t: 'punct', v: '})' }] },
      { indent: 0, tokens: [] },
      { indent: 1, tokens: [{ t: 'const', v: 'res' }, { t: 'punct', v: '.' }, { t: 'fn', v: 'json' }, { t: 'punct', v: '({ runId: ' }, { t: 'const', v: 'run' }, { t: 'punct', v: '.' }, { t: 'prop', v: 'id' }, { t: 'punct', v: ', status: ' }, { t: 'string', v: "'running'" }, { t: 'punct', v: ' })' }] },
      { indent: 0, tokens: [{ t: 'punct', v: '})' }] },
    ] as Line[],
  },
]

function Token({ t, v }: Token) {
  return <span className={`token-${t}`}>{v}</span>
}

export default function CodeShowcase() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]!

  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#3B5BFF]/05 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">

          {/* ── Left ─────────────────────────────────────────────────── */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs text-[#a1a1aa] mb-6">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #3B5BFF, #7A3CFF)' }} />
              Clean TypeScript API
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-5">
              Simple API.<br />
              <span className="gradient-text">Production ready.</span>
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8 leading-relaxed">
              Three primitives power the entire framework. Learn them once — build any agent.
            </p>

            <div className="flex flex-col gap-3">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                    active === i
                      ? 'border-[#3B5BFF]/50 bg-[#3B5BFF]/08 text-[#f4f4f5]'
                      : 'border-white/[0.07] text-[#71717a] hover:border-white/[0.12] hover:text-[#a1a1aa]'
                  }`}
                >
                  <code className={`text-sm font-mono font-semibold block mb-1 ${active === i ? 'text-[#00C2FF]' : 'text-[#52525b]'}`}>
                    {t.label}()
                  </code>
                  <span className="text-xs leading-relaxed">{t.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: code editor ──────────────────────────────────── */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111117] border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-[#52525b] font-mono">{tab.filename}</span>
              <span className="ml-auto text-xs text-[#3f3f46] border border-white/[0.06] px-2 py-0.5 rounded font-mono">@runflo/core</span>
            </div>
            <div className="bg-[#0a0a0e] overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {tab.lines.map((line, i) => (
                    <tr key={i} className="group hover:bg-white/[0.015] transition-colors">
                      <td className="w-10 pr-4 text-right text-xs text-[#3f3f46] select-none font-mono align-top py-0.5 pl-4">
                        {i + 1}
                      </td>
                      <td
                        className="code-block text-[13px] leading-[1.7] pr-6 py-0.5"
                        style={{ paddingLeft: line.indent * 18 }}
                      >
                        {line.tokens.length === 0 ? (
                          <>&nbsp;</>
                        ) : (
                          line.tokens.map((tok, j) => <Token key={j} {...tok} />)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

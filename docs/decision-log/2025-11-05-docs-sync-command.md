---
agent_edit: true
---

# Spostare il download della documentazione in un comando dedicato

**Il download automatico di `docs/DATOCMS.md` all'avvio del server creava file corrotti, perciò il recupero della documentazione avviene ora solo tramite il comando `npm run sync-datocms`, mentre la generazione di `schema.ts` continua a essere eseguita automaticamente all'avvio con `npm run dev`.**

- Date: 2025-11-05
- Alternatives Considered: Lasciare il download automatico nonostante gli errori sporadici; rimuovere completamente l'aggiornamento del file di documentazione.

## Decision

L'esecuzione del download della documentazione DatoCMS ogni volta che parte il server di sviluppo (`npm run dev`) portava occasionalmente a contenuti corrotti in `docs/DATOCMS.md`. Per ridurre il rischio, il download è stato separato in un comando esplicito (`npm run sync-datocms`) da usare quando serve aggiornare il materiale di riferimento. La generazione di `schema.ts`, invece, rimane nel flusso di avvio così il typing continua a essere allineato all'ambiente DatoCMS senza richiedere passaggi manuali aggiuntivi.

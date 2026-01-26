import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#2DD4BF',
        primaryTextColor: '#2B2D2F',
        primaryBorderColor: '#2DD4BF',
        lineColor: '#2DD4BF',
        secondaryColor: '#FF9B85',
        tertiaryColor: '#F5E6D3',
        background: '#FAFAF9',
        mainBkg: '#FAFAF9',
        secondBkg: '#FF9B85',
        tertiaryBkg: '#F5E6D3',
        nodeBorder: '#2B2D2F',
        clusterBkg: '#F5E6D3',
        clusterBorder: '#2B2D2F',
        titleColor: '#2B2D2F',
        edgeLabelBackground: '#FAFAF9',
        nodeTextColor: '#2B2D2F',
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
    });

    if (ref.current) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      ref.current.innerHTML = '';

      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      });
    }
  }, [chart]);

  return (
    <div
      ref={ref}
      className="my-8 p-6 bg-white rounded-2xl border border-charcoal/10 shadow-sm overflow-x-auto flex justify-center"
    />
  );
}

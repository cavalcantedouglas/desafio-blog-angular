import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitle } from "../../components/menu-title/menu-title";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from "../../components/small-card/small-card";
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MenuTitle, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  dataFake = dataFake;
  
  get mainArticle() {
    return this.dataFake[0];
  }
  
  get otherArticles() {
    return this.dataFake.slice(1);
  }
  
  get mainArticlePreview() {
    const article = this.mainArticle;
    if (!article) return null;
    
    return {
      ...article,
      description: this.truncateText(article.description, 100) // Limita a 100 caracteres
    };
  }
  
  private truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }
    
    // Encontra o primeiro ponto final dentro do limite
    const truncated = text.substring(0, maxLength);
    const lastPeriod = truncated.lastIndexOf('.');
    
    if (lastPeriod > 0) {
      return text.substring(0, lastPeriod + 1);
    }
    
    // Se não houver ponto, corta na última palavra completa
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 0) {
      return text.substring(0, lastSpace) + '...';
    }
    
    return truncated + '...';
  }
}

import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Row, Col, Drawer, Menu, Dropdown, MenuProps } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import { Button } from '../../common/Button';

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from './styles';

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  // Dropdown menu items for Products
  const productsMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to="/fabrication">{t('Fabrication')}</Link>,
    },
    {
      key: '2',
      label: <Link to="/industrialGoodAndMaterialSupply">{t('industrialGoodAndMaterialSupply')}</Link>,
    },
    {
      key: '3',
      label: <Link to="/valveAndPump">{t('ValveAndPump')}</Link>,
    },
  ];

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setVisibility(false);
    };

    return (
      <>
        {/* Home Tab */}
        <CustomNavLinkSmall>
          <Link to="/home">{t('Home')}</Link>
        </CustomNavLinkSmall>

        {/* About Tab */}
        <CustomNavLinkSmall>
          <Link to="/about">{t('About')}</Link>
        </CustomNavLinkSmall>

        {/* Services Tab */}
        <CustomNavLinkSmall>
          <Link to="/services">{t('Services')}</Link>
        </CustomNavLinkSmall>

        {/* Products Tab with Dropdown */}
        <Dropdown
          overlay={<Menu items={productsMenuItems} />}
          trigger={['hover', 'click']}
        >
          <CustomNavLinkSmall>
            <Link to="/products">
              {t('Products')} <DownOutlined />
            </Link>
          </CustomNavLinkSmall>
        </Dropdown>

        {/* Contact Button */}
        <CustomNavLinkSmall style={{ width: '180px' }} onClick={() => scrollTo('contact')}>
          <Span>
            <Button>{t('Contact')}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.jpeg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: '2.5rem' }}>
            <Label onClick={toggleButton}>
              <Col span={12}>Menu</Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);

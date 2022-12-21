
                            <ImageBackground style={{ width: screen.width * 0.9, height: screen.width * 0.9 * 0.8, flexDirection: 'column-reverse' }} resizeMode='cover' borderTopLeftRadius={10} borderTopRightRadius={10} source={{ uri: this.props.restoran.RES_IMAGE_URI }}>
                                {this.props.favourite &&
                                    <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10, backgroundColor: colors.white, borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                                        if (this.props.USER?.ID > 0) {
                                            this.props.setRestaurantFavourite(this.props.restoran.IS_CURRENT_USER_FOLLOW_RES, this.props.USER?.ID, this.props.COORDS, DEVICE_IP, VERSION, this.props.restoran?.ID, this.props.restoran?.ID)
                                        } else {
                                            Alert.alert('Üyeliğiniz Yok', 'Restoranı favoriye ekleyebilmeniz için üye girişi yapmanız gerekmektedir', [
                                                { text: "Giriş Yap", onPress: () => this.props.navigation.navigate('Login') },
                                                { text: "Vazgeç" }
                                            ])
                                        }
                                    }}>
                                        {this.props.restoran.IS_CURRENT_USER_FOLLOW_RES == 1
                                            ? <Image source={require('../assets/images/followed.png')} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                                            : <Image source={require('../assets/images/begeni.png')} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                                        }
                                    </TouchableOpacity>
                                }
                                <View style={{ alignSelf: 'flex-end', backgroundColor: 'rgba(255,255,255,0.7)', paddingHorizontal: 15, paddingVertical: 2, borderRadius: 5, margin: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium' }}>{this.props.restoran.DISTRANCE?.distanceText}</Text>
                                </View>
                                <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', width: 200, overflow: 'hidden',bottom:0 }}>
                                    {restoranFotografi.map((item,index) =>
                                        <View key={index} style={{ width: 15, height: 15, borderRadius: 8, marginHorizontal: 2, backgroundColor: this.state.selectedSlider == index ? colors.black : colors.labelGray,borderWidth:2,borderColor:colors.white }} />
                                    )}
                                </View>
                            </ImageBackground>
                        
